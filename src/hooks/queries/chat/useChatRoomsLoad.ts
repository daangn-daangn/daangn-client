import { getChatRooms } from 'apis/chat/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IGetChat } from 'interfaces/Chat.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IGetChat[], unknown> {}

const useChatRoomsLoad = ({ ...options }: CustomQueryOption = {}) => {
  return useQuery<IGetChat[]>(QUERY_KEYS.CHAT_ROOMS, getChatRooms, options);
};

export default useChatRoomsLoad;
