import { LoginPageStyled } from './LoginPageStyled';
import { KAKAO_AUTH_URL } from 'utils/KakaoLogin/OAuth';
import Button from '@atoms/Button/Button';

const LoginPage = () => {
  return (
    <>
      <LoginPageStyled>
        <img src="http://cdn.iconsumer.or.kr/news/photo/202006/12131_15370_82.png" />
        <a href={KAKAO_AUTH_URL}>
          <Button width="100%" height="50px" background="#f9e000" hoverBackground="#E4CD00" fontColor="black">
            <div className="kakao-login-button">
              <img
                src="https://src.wizad.co.kr/wizbbs/data/shopimg/A1539593681342_kakaotalk-logo2.png"
                width={'22px'}
              />
              <span>Kakao로 시작하기</span>
            </div>
          </Button>
        </a>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
