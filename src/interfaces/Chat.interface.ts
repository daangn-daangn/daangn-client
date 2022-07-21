import { dummyProduct, dummyUser } from 'pages/Product/ProductDetailPage/ProductDetailPage';

export interface IChat {
  sender: 'me' | 'you'; //보낸사람 정보. 일단은 me, you로만 구분
  message: string | string[];
  message_type: 'text' | 'image' | 'location';
  createdAt: Date;
}

export type IChatMessageTypeOne = {
  sender_id: number;
  message_type: ChatMessageEnum.GENERAL;
  message: string;
  img_urls: null;
  created_at: Date;
};

export type IChatMessageTypeTwo = {
  sender_id: number;
  message_type: ChatMessageEnum.COORDINATE;
  message: string;
  img_urls: null;
  created_at: Date;
};

export type IChatMessageTypeThree = {
  sender_id: number;
  message_type: ChatMessageEnum.IMAGE;
  message: null;
  img_urls: string[];
  created_at: Date;
};

export type ChatMessageType = IChatMessageTypeOne | IChatMessageTypeTwo | IChatMessageTypeThree;

export interface IGetChat {
  chat_room_id: string;
  participant: string;
  participant_image: string;
  location: string;
  product_image: string | null;
  last_chat: string | null;
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

export enum ChatMessageEnum {
  GENERAL,
  COORDINATE,
  IMAGE,
}

export const dummyGetChats: IGetChat[] = Array(10)
  .fill(dummyGetChat)
  .map((chat, index) => {
    const indexChat = { ...chat };
    indexChat.id = index + 1;
    return indexChat;
  });
