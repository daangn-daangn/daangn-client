import axios from 'axios';

export interface PostChatRoomParams {
  product_id: number;
  other_user_id: number;
}

export interface GetCharRoomParams {
  chatRoomId: string;
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
    .post('/api/chat-rooms', postChatRoom)
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
