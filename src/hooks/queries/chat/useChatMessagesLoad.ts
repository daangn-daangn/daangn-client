import { getChatMessages } from 'apis/chat/api';
import QUERY_KEYS from 'constants/queryKeys';
import { ChatMessageType } from 'interfaces/Chat.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<ChatMessageType[], unknown> {
  chatRoomId: string;
  page?: number;
}

const useChatMessagesLoad = ({ chatRoomId, page = 0, ...options }: CustomQueryOption) => {
  return useQuery<ChatMessageType[]>(
    [QUERY_KEYS.CHAT_ROOMS, chatRoomId, QUERY_KEYS.MESSAGES, page],
    () => getChatMessages({ chatRoomId, page }),
    options,
  );
};

export default useChatMessagesLoad;
