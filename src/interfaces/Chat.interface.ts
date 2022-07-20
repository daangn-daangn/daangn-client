import { dummyProduct, dummyUser } from 'pages/Product/ProductDetailPage/ProductDetailPage';

export interface IChat {
  sender: 'me' | 'you'; //보낸사람 정보. 일단은 me, you로만 구분
  message: string;
  message_type: 'text' | 'image' | 'location';
  createdAt: Date;
}

export interface IGetChat {
  chat_room_id: string;
  participant: string;
  participant_image: string;
  location: string;
  product_image: string;
  last_chat: string;
  not_read_chat_count: number;
  page_offset: number;
  page_size: number;
  updated_at: Date;
}

export interface IChatRoomDetail {
  chat_room_id: string;
  participant_id: number;
  participant_nickname: string;
  participant_manner: number;
  participant_image: string | null;
  out: boolean;
  product_id: number;
  product_image: string | null;
  product_price: number;
  product_title: string;
  product_name: string;
  product_state: string;
}

export const dummyGetChat = {
  chat_room_id: '62a992369d47a67cf5aaca76',
  participant: '테스트닉네임1',
  participant_image: dummyProduct.thumb_nail_image,
  location: '노원구 상계동',
  product_image: dummyUser.profile_url,
  last_chat: '안녕하세요',
  not_read_chat_count: 0,
  page_offset: 0,
  page_size: 10,
  updated_at: new Date(),
};

export const dummyGetChats: IGetChat[] = Array(10)
  .fill(dummyGetChat)
  .map((chat, index) => {
    const indexChat = { ...chat };
    indexChat.id = index + 1;
    return indexChat;
  });
