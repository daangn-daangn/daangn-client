import { getChatRoomUsers } from 'apis/chat/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IChatRoomUser } from 'interfaces/Chat.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IChatRoomUser[], unknown> {
  productId: number;
}

const useChatRoomUsersLoad = ({ productId, ...options }: CustomQueryOption) => {
  return useQuery<IChatRoomUser[]>(
    [QUERY_KEYS.CHAT_ROOMS, 'users', productId],
    () => getChatRoomUsers({ productId }),
    options,
  );
};

export default useChatRoomUsersLoad;
