import Button from '@atoms/Button/Button';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import { useNavigate } from 'react-router';
import { NickNameSettingPageStyled } from './NickNameSettingPageStyled';
import { useForm } from 'react-hook-form';
import { IUser } from 'interfaces/User.interface';

const NickNameSettingPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<IUser, 'nickname'>>({ mode: 'onChange' });

  const onSubmit = (data: Pick<IUser, 'nickname'>) => {
    console.log(data);
    // //닉네임 빈칸으로 제출시 서버로 요청 안되게 막기
    // if (!nickname) {
    //   if (nicknameInput.current) {
    //     nicknameInput.current.focus();
    //   }
    //   return;
    // }
    //닉네임 서버로 전송
    //성공시 위치 찾는 페이지로 이동
    //navigate('/signup/location');
  };

  return (
    <NickNameSettingPageStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title fontSize="23px" fontWeigt="700">
          닉네임을 입력해주세요.
        </Title>
        <div className="text-input-wrap">
          <InputText
            label="닉네임"
            register={{ ...register('nickname', { required: '닉네임을 입력해주세요' }) }}
            message={errors.nickname?.message}
          />
        </div>
        <Button width="100%" height="56px" type="submit">
          완료
        </Button>
      </form>
    </NickNameSettingPageStyled>
  );
};

export default NickNameSettingPage;
