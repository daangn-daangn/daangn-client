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

const ProfileEditPage = () => {
  const location = useLocation();
  const state = location.state as IUser;

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [showProfilePicModal, setShowProfilePicModal] = useState<boolean>(false);

  const inputPhotoRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<Pick<IUser, 'nickname' | 'profileUrl'>>();

  const onSubmit = (data: Pick<IUser, 'nickname' | 'profileUrl'>) => {
    console.log(data);
  };

  const onChange = () => {
    trigger();
    watch('nickname') ? setButtonDisabled(false) : setButtonDisabled(true);
  };

  useEffect(() => {
    reset({ ...state });
  }, []);

  const onClickShowModal = () => {
    setShowProfilePicModal((prev) => !prev);
  };

  const ProfilePicModalSelects = [
    {
      content: '파일에서 선택',
      function: () => {
        inputPhotoRef.current?.click();
        setShowProfilePicModal(false);
      },
    },
    { content: '프로필 사진 삭제', function: () => console.log('프로필 사진 삭제') },
  ];

  return (
    <>
      <ProfileEditPageStyled>
        <Top title="프로필 수정" left="prev" />
        <form onSubmit={handleSubmit(onSubmit)} onChange={(e) => onChange()}>
          <div className="profile-url">
            <div onClick={onClickShowModal}>
              <Image imgUrl={watch('profileUrl')} borderRedius="50%" />
            </div>
            <InputPhoto
              setPickedPhotos={(value) =>
                encodeFileToBase64(value[0]).then((data) => setValue('profileUrl', data as string))
              }
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
                  required: '닉네임을 입력해주세요!',
                  minLength: {
                    value: 2,
                    message: '닉네임은 2자 이상 입력해주세요.',
                  },
                  pattern: {
                    value: /^[|a-z|A-Z|0-9|가-힣|]*$/i,
                    message: '닉네임은 띄어쓰기 없이 한글, 영문, 숫자만 가능해요.',
                  },
                }),
              }}
              width="100%"
              textAlign="center"
              border={errors.nickname?.message ? '1px solid red' : '1px solid #e0dfde'}
              placeholder="닉네임을 입력해주세요."
              autoComplete="off"
            />
            <Message
              message={errors.nickname?.message || '프로필 사진과 닉네임을 입력해주세요.'}
              color={errors.nickname?.message ? 'red' : '#808080'}
            />
          </div>
          <Button width="100%" padding="10px 0px" type="submit" disabled={buttonDisabled}>
            완료
          </Button>
        </form>
        {showProfilePicModal && <SelectModal setModal={setShowProfilePicModal} selects={ProfilePicModalSelects} />}
      </ProfileEditPageStyled>
    </>
  );
};
export default ProfileEditPage;
