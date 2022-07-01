import { useEffect } from 'react';
import axios from 'axios';
import { CLIENT_ID, REDIRECT_URI } from './OAuth';
import QueryString from 'qs';
import Spinner from '@atoms/Spinner/Spinner';

const OAuth2RedirectHandler = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  useEffect(() => {
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
      }).then((res) => console.log(res));
    };
    handleRedirect();
  }, [code]);

  return (
    <div style={{ overflow: 'hidden' }}>
      <Spinner />
    </div>
  );
};

export default OAuth2RedirectHandler;
