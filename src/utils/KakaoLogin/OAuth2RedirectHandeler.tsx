import { useEffect } from 'react';
import axios from 'axios';
import { CLIENT_ID, REDIRECT_URI } from './OAuth';
import QueryString from 'qs';
import Spinner from '@atoms/Spinner/Spinner';
import { postJoin, postLogin } from 'apis/user/api';
import useUserJoin from 'hooks/queries/user/useUserJoin';
import useUserLogin from 'hooks/queries/user/useUserLogin';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoggedState, tokenState, TOKEN_KEY } from 'stores/Auth';

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const setIsLogged = useSetRecoilState(isLoggedState);
  const setToken = useSetRecoilState(tokenState);
  const code = new URL(window.location.href).searchParams.get('code');
  const loginMutatuin = useUserLogin({
    onSuccess: ({ response }) => {
      console.log(response);
      const token = response.api_token;
      localStorage.setItem(TOKEN_KEY, token);
      setIsLogged(true);
      setToken(token);
      response.nickname != null ? navigate('/') : navigate('/signup/nickname');
    },
    onError: (error) => {
      console.log(error.message);
      navigate('/login');
    },
  });
  const joinMutation = useUserJoin({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message);
      navigate('/login');
    },
  });
  useEffect(() => {
    try {
      const handleRedirect = async () => {
        await axios({
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          url: 'https://kauth.kakao.com/oauth/token',
          data: QueryString.stringify({
            grant_type: 'authorization_code',
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            code: code,
          }),
        }).then((res) => {
          const kakaoToken = res.data.access_token;
          joinMutation
            .mutateAsync({ access_token: kakaoToken })
            .then(() => loginMutatuin.mutate({ access_token: kakaoToken }));
        });
      };
      handleRedirect();
    } catch (error) {
      console.log(error, 'error');
    }
  }, [code]);

  return (
    <div style={{ overflow: 'hidden' }}>
      <Spinner />
    </div>
  );
};

export default OAuth2RedirectHandler;
