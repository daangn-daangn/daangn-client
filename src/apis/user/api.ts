import axios from 'axios';

export interface PostLogin {
  access_token: string;
}

export interface PostJoin {
  access_token: string;
}

export interface GetUserNickNameCheckParams {
  nickname: string;
}

export const postJoin = async ({ access_token }: PostJoin) => {
  return axios
    .post('/api/users/join', { access_token })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error('회원가입을 실패했습니다.');
    });
};

export const postLogin = async ({ access_token }: PostLogin) => {
  return axios
    .post('/api/auth/login', { access_token })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error('로그인을 실패했습니다.');
    });
};

export const getUserNicknameCheck = async ({ nickname }: GetUserNickNameCheckParams) => {
  return axios
    .get<{ result: boolean }>(`/api/users/nickname?name=${nickname}`)
    .then((res) => res.data.result)
    .catch((error) => {
      console.log(error);
      return '서버에러';
    });
};
