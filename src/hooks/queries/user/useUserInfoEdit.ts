import { putUserInfo, PutUserInfo } from 'apis/user/api';
import { ResposeErrorType, ResposeSuccessType } from 'interfaces/Response.interfact';
import { useMutation, UseMutationOptions } from 'react-query';

type ResponseType = {
  id: number;
  profile_url: string;
};

const useUserInfoEdit = (
  option?: UseMutationOptions<ResposeSuccessType<ResponseType>, ResposeErrorType, PutUserInfo>,
) => {
  return useMutation(putUserInfo, option);
};

export default useUserInfoEdit;
