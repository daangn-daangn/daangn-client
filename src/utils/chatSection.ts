import 'moment/locale/ko';
import moment from 'moment';
import { IChat } from 'interfaces/Chat.interface';

export function makeChatDaySection(chatList: IChat[]) {
  const section: { [key: string]: IChat[] } = {};
  chatList.forEach((chat) => {
    const monthDate = moment(chat.createdAt).format('YYYY월 M월 DD일');
    const minutes = moment(chat.createdAt).format('hh:mm');
    if (monthDate in section) {
      section[monthDate].push(chat);
    } else {
      section[monthDate] = [chat];
    }
  });
  return section;
}

export function makeChatMinutesSection(chatList: IChat[]) {
  const section: { [key: string]: IChat[] } = {};
  chatList.forEach((chat) => {
    const minutes = moment(chat.createdAt).format('hh:mm');
    if (minutes in section) {
      section[minutes].push(chat);
    } else {
      section[minutes] = [chat];
    }
  });
  return section;
}
