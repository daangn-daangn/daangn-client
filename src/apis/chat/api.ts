import axios from 'axios';
import { ChatMessageEnum } from 'interfaces/Chat.interface';

interface chatRoomIdParams {
  chatRoomId: string;
}

export interface PostChatRoomParams {
  product_id: number;
  other_user_id: number;
}

export interface GetChatRoomParams extends chatRoomIdParams {}

export interface GetChatMessagesParams extends chatRoomIdParams {
  page: number;
}


export interface GetProductIdParams {
  productId: number;
}
type ChatMessageType = { message: string; img_files?: never };
type ChatImageType = { img_files: string; message?: never };

type ChatType = ChatMessageType | ChatImageType;

export type PostChatMessageParams = ChatType & {
  room_id: string;
  sneder_id: number;
  receiver_id: number;
  message_type: ChatMessageEnum;
};


export const getChatRooms = async () => {
  return axios
    .get('/api/chat-rooms')
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const postChatRoom = async (postChatRoomParams: PostChatRoomParams) => {
  return axios
    .post('/api/chat-rooms', postChatRoomParams)
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const getCharRoom = async ({ chatRoomId }: GetChatRoomParams) => {
  return axios
    .get(`/api/chat-rooms/${chatRoomId}`)
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};


export const getChatRoomUsers = async ({ productId }: GetProductIdParams) => {
  return axios
    .get(`/api/chat-rooms/product/${productId}`)

export const getChatMessages = async ({ chatRoomId, page }: GetChatMessagesParams) => {
  return axios
    .get(`/chat/messages`, {
      params: {
        room_id: chatRoomId,
        page,
      },
    })
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};


export const postChatMessage = async (postChatMessageParams: PostChatMessageParams) => {
  return axios.post('/chat/messages', postChatMessageParams);
};

