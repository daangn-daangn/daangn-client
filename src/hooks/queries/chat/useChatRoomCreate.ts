import { postChatRoom, PostChatRoomParams } from 'apis/chat/api';
import { useMutation, UseMutationOptions } from 'react-query';

interface ResponseType {
  room_id: string;
}

const useChatRoomCreate = (option?: UseMutationOptions<ResponseType, Error, PostChatRoomParams>) => {
  return useMutation(postChatRoom, option);
};

export default useChatRoomCreate;
