import 'moment/locale/ko';
import moment from 'moment';
import { IChat } from 'interfaces/Chat.interface';

export function makeChatDayAndMinutesSection(chatList: IChat[]) {
  const section: { [key: string]: { [key: string]: IChat[] } } = {};
  chatList.forEach((chat) => {
    const day = moment(chat.createdAt).format('YYYY월 M월 DD일');
    const minutes = moment(chat.createdAt).format('hh:mm');
    if (day in section) {
      (minutes in section[day] && section[day][minutes].push(chat)) || (section[day][minutes] = [chat]);
    } else {
      section[day] = {};
      section[day][minutes] = [chat];
    }
  });
  return section;
}
