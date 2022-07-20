import { getCharRoom } from 'apis/chat/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IChatRoomDetail } from 'interfaces/Chat.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IChatRoomDetail, unknown> {
  chatRoomId: string;
}

const useChatRoomDetail = ({ chatRoomId, ...options }: CustomQueryOption) => {
  return useQuery<IChatRoomDetail>([QUERY_KEYS.CHAT_ROOMS, chatRoomId], () => getCharRoom({ chatRoomId }), options);
};

export default useChatRoomDetail;
