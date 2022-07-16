import { getUserNicknameCheck } from 'apis/user/api';
import QUERY_KEYS from 'constants/queryKeys';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';

interface ResponseType {
  success: true;
  response: {
    result: boolean;
  };
  error: null;
}

interface CustomQueryOption extends UseQueryOptions<ResponseType, unknown, ResponseType, QueryKey> {
  nickname: string;
}

const useUserNicknameCheck = ({ nickname, ...option }: CustomQueryOption) => {
  return useQuery<ResponseType>([QUERY_KEYS.USER, nickname], () => getUserNicknameCheck({ nickname }), option);
};

export default useUserNicknameCheck;
