import { getUserInfo } from 'apis/user/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IUser } from 'interfaces/User.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IUser, unknown> {
  userId: number;
}

const useUserInfo = ({ userId, ...options }: CustomQueryOption) => {
  return useQuery<IUser>([QUERY_KEYS.USER, userId], () => getUserInfo(userId), options);
};

export default useUserInfo;
