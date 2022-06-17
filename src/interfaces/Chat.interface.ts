export interface IChat {
  sender: 'me' | 'you'; //보낸사람 정보. 일단은 me, you로만 구분
  message: string;
  message_type: 'text' | 'image' | 'location';
  createdAt: Date;
}
