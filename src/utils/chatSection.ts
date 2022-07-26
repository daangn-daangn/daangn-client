import 'moment/locale/ko';
import moment from 'moment';
import { ChatMessageEnum, ChatMessageType, IChat } from 'interfaces/Chat.interface';

export function makeChatDayAndMinutesSection(chatList: ChatMessageType[], myId: number) {
  const section: { [key: string]: { [key: string]: IChat[] } } = {};
  chatList.forEach((chat) => {
    const day = moment(chat.created_at).format('YYYY월 M월 DD일');
    const minutes = moment(chat.created_at).format('hh:mm');
    const convertChat = covertIChatType(chat, myId);
    if (day in section) {
      (minutes in section[day] && section[day][minutes].push(convertChat)) || (section[day][minutes] = [convertChat]);
    } else {
      section[day] = {};
      section[day][minutes] = [convertChat];
    }
  });
  return section;
}

const covertIChatType = (chat: ChatMessageType, myId: number): IChat => {
  const sender = chat.sender_id == myId ? 'me' : 'you';
  const message_type =
    chat.message_type === ChatMessageEnum.GENERAL
      ? 'text'
      : chat.message_type === ChatMessageEnum.IMAGE
      ? 'image'
      : 'location';
  return {
    sender,
    message_type,
    message: chat.message_type === ChatMessageEnum.IMAGE ? chat.img_urls : chat.message,
    createdAt: chat.created_at,
  };
};
