import axios from 'axios';

export interface PostChatRoomParams {
  product_id: number;
  other_user_id: number;
}

export interface GetCharRoomParams {
  chatRoomId: string;
}

export interface GetProductIdParams {
  productId: number;
}

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

export const getCharRoom = async ({ chatRoomId }: GetCharRoomParams) => {
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
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};
