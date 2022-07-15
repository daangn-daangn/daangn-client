import { PostLogin, postLogin } from 'apis/user/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

export interface ResposeType {
  error: null;
  success: true;
  response: any;
}

const useUserLogin = (option?: UseMutationOptions<ResposeType, Error, PostLogin>) => {
  return useMutation(postLogin, option);
};

export default useUserLogin;
