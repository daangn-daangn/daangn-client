import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ProfileEditPageStyled } from './ProfileEditPageStyled';
import Top from '@molecules/Top/Top';
import InputPhoto from '@molecules/InputPhoto/InputPhoto';
import Image from '@atoms/Image/Image';
import Input from '@atoms/Input/Input';
import Message from '@atoms/Message/Message';
import { IUser } from 'interfaces/User.interface';
import { ReactComponent as Camera } from 'assets/camera.svg';
import Button from '@atoms/Button/Button';
import { encodeFileToBase64 } from 'utils/encodeImage';
import SelectModal from '@molecules/SelectModal/SelectModal';
import { daangnee } from 'constants/defaultProfilePic';
import useUserInfoEdit from 'hooks/queries/user/useUserInfoEdit';
import { uploadFileToS3, convertURLtoImageFile } from 'utils/handleFileToS3';
import useLogOut from 'hooks/common/useLogOut';

export interface IUserProfileEdid extends Pick<IUser, 'nickname' | 'profile_url' | 'location'> {
  profile_file?: File;
}

const ProfileEditPage = () => {
  const location = useLocation();
  const state = location.state as IUser;
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [showProfilePicModal, setShowProfilePicModal] = useState<boolean>(false);
  useLogOut();

  const inputPhotoRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const userInfoEditMutation = useUserInfoEdit({
    onSuccess: (data, variables: IUserProfileEdid) => {
      console.log(data);
      uploadFileToS3(data.response.profile_url, variables.profile_file);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<IUserProfileEdid>();

  const onSubmit = (data: IUserProfileEdid) => {
    data.profile_url = 'profile_image.jpg';
    userInfoEditMutation.mutate(data);
  };

  useEffect(() => {
    reset({ ...state });
  }, []);

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(watch())) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [watch()]);

  const onClickShowModal = () => {
    setShowProfilePicModal((prev) => !prev);
  };

  const deleteProfilePic = () => {
    convertURLtoImageFile(daangnee).then((res) => {
      setValue('profile_url', daangnee);
      setValue('profile_file', res);
    });
  };

  const ProfilePicModalSelects = [
    {
      content: '???????????? ??????',
      function: () => {
        inputPhotoRef.current?.click();
        setShowProfilePicModal(false);
      },
    },
    { content: '????????? ?????? ??????', function: () => deleteProfilePic() },
  ];

  return (
    <>
      <ProfileEditPageStyled>
        <Top title="????????? ??????" left="prev" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="profile-url">
            <div onClick={onClickShowModal}>
              <Image imgUrl={watch('profile_url')} borderRedius="50%" />
            </div>
            <InputPhoto
              setPickeFiles={(value) => {
                setValue('profile_file', value[0]);
                encodeFileToBase64(value[0]).then((data) => {
                  setValue('profile_url', data as string);
                });
              }}
              buttonNode={<div ref={inputPhotoRef} />}
            />
            <div className="camera-icon">
              <Camera />
            </div>
          </div>
          <div className="nickname">
            <Input
              register={{
                ...register('nickname', {
                  required: '???????????? ??????????????????!',
                  minLength: {
                    value: 2,
                    message: '???????????? 2??? ?????? ??????????????????.',
                  },
                  pattern: {
                    value: /^[|a-z|A-Z|0-9|???-???|]*$/i,
                    message: '???????????? ???????????? ?????? ??????, ??????, ????????? ????????????.',
                  },
                }),
              }}
              width="100%"
              textAlign="center"
              border={errors.nickname?.message ? '1px solid red' : '1px solid #e0dfde'}
              placeholder="???????????? ??????????????????."
              autoComplete="off"
            />
            <Message
              message={errors.nickname?.message || '????????? ????????? ???????????? ??????????????????.'}
              color={errors.nickname?.message ? 'red' : '#808080'}
            />
          </div>
          <Button width="100%" padding="10px 0px" type="submit" disabled={buttonDisabled}>
            ??????
          </Button>
        </form>
        {showProfilePicModal && <SelectModal setModal={setShowProfilePicModal} selects={ProfilePicModalSelects} />}
      </ProfileEditPageStyled>
    </>
  );
};
export default ProfileEditPage;
