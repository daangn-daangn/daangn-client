import Button from '@atoms/Button/Button';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import { useNavigate } from 'react-router';
import { NickNameSettingPageStyled } from './NickNameSettingPageStyled';
import { useForm } from 'react-hook-form';
import { IUser } from 'interfaces/User.interface';
import { useSetRecoilState } from 'recoil';
import { nicknameState, profileImageFileState } from 'stores/User';
import useDebounceValue from 'hooks/common/useDebounceValue';
import useUserNicknameCheck from 'hooks/queries/user/useUserNicknameCheck';
import Image from '@atoms/Image/Image';
import InputPhoto from '@molecules/InputPhoto/InputPhoto';
import { encodeFileToBase64 } from 'utils/encodeImage';
import { ReactComponent as Camera } from 'assets/camera.svg';
import SelectModal from '@molecules/SelectModal/SelectModal';
import { useRef, useState } from 'react';
import useLogOut from 'hooks/common/useLogOut';

interface IForm extends Pick<IUser, 'nickname' | 'profile_url'> {
  profile_file?: File;
}

const NickNameSettingPage = () => {
  const navigate = useNavigate();
  useLogOut();
  const [showProfilePicModal, setShowProfilePicModal] = useState<boolean>(false);
  const setNicname = useSetRecoilState(nicknameState);
  const setProfileImage = useSetRecoilState(profileImageFileState);
  const inputPhotoRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IForm>({ mode: 'onChange' });

  const debouncedNicknameQuery = useDebounceValue(watch('nickname'));
  const { data } = useUserNicknameCheck({
    nickname: debouncedNicknameQuery,
    enabled: !!debouncedNicknameQuery,
  });
  const onSubmit = (data: IForm) => {
    setNicname(data.nickname);
    setProfileImage(data.profile_file || null);
    //성공시 위치 찾는 페이지로 이동
    navigate('/signup/location');
  };
  const deleteProfilePic = () => {
    setValue('profile_file', undefined);
  };
  const ProfilePicModalSelects = [
    {
      content: '파일에서 선택',
      function: () => {
        inputPhotoRef.current?.click();
        setShowProfilePicModal(false);
      },
    },
    { content: '프로필 사진 삭제', function: () => deleteProfilePic() },
  ];
  return (
    <NickNameSettingPageStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title fontSize="23px" fontWeigt="700">
          닉네임과 프로필을 설정해 주세요.
        </Title>
        <div className="profile-url">
          <div className="profile-url_image" onClick={() => setShowProfilePicModal((prev) => !prev)}>
            <Image imgUrl={watch('profile_url')} borderRedius="50%" />
            <div className="camera-icon">
              <Camera />
            </div>
          </div>
          <InputPhoto
            setPickeFiles={(value) => {
              setValue('profile_file', value[0]);
              encodeFileToBase64(value[0]).then((data) => setValue('profile_url', data as string));
            }}
            buttonNode={<div ref={inputPhotoRef} />}
          />
        </div>
        <div className="text-input-wrap">
          <InputText
            label="닉네임"
            register={{
              ...register('nickname', {
                required: '닉네임을 입력해주세요',
                validate: {
                  nicknameCheck: async () => {
                    if (!data) return '확인중...';
                    return data.response.result ? data.response.result : '이미 사용중인 닉네임 입니다.';
                  },
                },
              }),
            }}
            message={!data?.response.result ? errors.nickname?.message : '사용가능한 닉네임 입니다.'}
            msgColor={data?.response.result ? 'blue' : ''}
          />
        </div>
        <Button disabled={!watch('nickname') || !watch('profile_file')} width="100%" height="56px" type="submit">
          완료
        </Button>
      </form>
      {showProfilePicModal && <SelectModal setModal={setShowProfilePicModal} selects={ProfilePicModalSelects} />}
    </NickNameSettingPageStyled>
  );
};

export default NickNameSettingPage;
