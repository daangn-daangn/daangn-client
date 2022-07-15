import { postJoin, PostJoin, PostLogin, postLogin } from 'apis/user/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useUserJoin = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PostJoin>) => {
  return useMutation(postJoin, option);
};

export default useUserJoin;
