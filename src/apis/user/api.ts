import axios from 'axios';
import { IUser } from 'interfaces/User.interface';

export interface PostLogin {
  access_token: string;
}

export interface PostJoin {
  access_token: string;
}

export interface GetUserNickNameCheckParams {
  nickname: string;
}

export interface PutUserInfo {
  nickname: string;
  location: string;
  profile_url: string;
}

export const getLoginUser = async () => {
  return axios
    .get('/api/users')
    .then((res) => res.data.response)
    .catch((error) => {
      throw new Error('서버 에러');
    });
};

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
    .get(`/api/users/nickname?name=${nickname}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      throw new Error('서버 에러');
    });
};

export const putUserInfo = async (putUserInfo: PutUserInfo) => {
  return axios
    .put('/api/users', { ...putUserInfo })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
