import Button from '@atoms/Button/Button';
import Message from '@atoms/Message/Message';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { NickNameSettingPageStyled } from './NickNameSettingPageStyled';

const NickNameSettingPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const nicknameInput = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);
  const onSubmit = () => {
    //닉네임 빈칸으로 제출시 서버로 요청 안되게 막기
    if (!nickname) {
      if (nicknameInput.current) {
        nicknameInput.current.focus();
      }
      return;
    }
    //닉네임 서버로 전송
    //성공시 위치 찾는 페이지로 이동
    // navigate('/signup/location');
  };
  return (
    <NickNameSettingPageStyled>
      <form>
        <Title fontSize="23px" fontWeigt="700">
          닉네임을 입력해주세요.
        </Title>
        <div className="text-input-wrap">
          <InputText inputRef={nicknameInput} label="닉네임" value={nickname} onChange={onChange} />
          {!nickname && <Message message="닉네임을 입력해 주세요" />}
        </div>
      </form>
      <Button onClick={onSubmit} width="100%" height="56px">
        완료
      </Button>
    </NickNameSettingPageStyled>
  );
};
export default NickNameSettingPage;
