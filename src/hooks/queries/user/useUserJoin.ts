import { postJoin, PostJoin } from 'apis/user/api';
import { ResposeSuccessType } from 'interfaces/Response.interfact';
import { useMutation, UseMutationOptions } from 'react-query';

const useUserJoin = (
  option?: UseMutationOptions<
    ResposeSuccessType<{ id: number; oauth_id: number; profile_url: string }>,
    Error,
    PostJoin
  >,
) => {
  return useMutation(postJoin, option);
};

export default useUserJoin;
