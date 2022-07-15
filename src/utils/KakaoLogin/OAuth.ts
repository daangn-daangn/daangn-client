export const CLIENT_ID = `${process.env.REACT_APP_KAKAO_API_KEY}`;
export const REDIRECT_URI = `http://localhost:3000/oauth/callback/kakao`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
