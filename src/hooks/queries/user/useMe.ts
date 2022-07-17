import { getLoginUser, getUserNicknameCheck } from 'apis/user/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IUser } from 'interfaces/User.interface';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IUser, unknown> {}

const useMe = ({ ...option }: CustomQueryOption = {}) => {
  return useQuery<IUser>(QUERY_KEYS.USER, getLoginUser, option);
};

export default useMe;
