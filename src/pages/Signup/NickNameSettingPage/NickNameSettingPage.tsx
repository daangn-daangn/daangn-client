import Button from '@atoms/Button/Button';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import { useNavigate } from 'react-router';
import { NickNameSettingPageStyled } from './NickNameSettingPageStyled';
import { useForm } from 'react-hook-form';
import { IUser } from 'interfaces/User.interface';
import { useSetRecoilState } from 'recoil';
import { nicknameState } from 'stores/User';

const NickNameSettingPage = () => {
  const navigate = useNavigate();
  const setNicname = useSetRecoilState(nicknameState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<IUser, 'nickname'>>({ mode: 'onChange' });

  const onSubmit = ({ nickname }: Pick<IUser, 'nickname'>) => {
    setNicname(nickname);
    //성공시 위치 찾는 페이지로 이동
    navigate('/signup/location');
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
            register={{
              ...register('nickname', {
                required: '닉네임을 입력해주세요',
                // validate: {
                //   nicknameCheck: async (nickname) => {
                //     const result = await getUserNicknameCheck({ nickname });
                //     return result ? result : '이미 존재하는 닉네임 입니다.';
                //   },
                // },
              }),
            }}
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
