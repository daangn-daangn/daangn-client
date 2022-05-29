import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Top from '@molecules/Top/Top';

const SignupLayoutStyled = styled.div`
  padding: 50px 20px 0px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 24px;
    margin: 40px 0px;
  }
  button:last-of-type {
    margin-top: auto;
  }
`;

const SignupLayout = () => {
  return (
    <SignupLayoutStyled>
      <Top left="prev" title="프로필 설정" />
      <Outlet />
    </SignupLayoutStyled>
  );
};

export default SignupLayout;
