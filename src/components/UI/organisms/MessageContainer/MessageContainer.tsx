import Timeline from '@atoms/Timeline/Timeline';
import ChatSendBox from '@molecules/ChatSendBox/ChatSendBox';
import MessagesPerMinute from '@molecules/MessagesPerMinute/MessagesPerMinute';
import useChatMessagesLoad from 'hooks/queries/chat/useChatMessagesLoad';
import useMe from 'hooks/queries/user/useMe';
import { ChatMessageEnum, ChatMessageType, IChat } from 'interfaces/Chat.interface';
import { useEffect, useRef, useState } from 'react';
import { makeChatDayAndMinutesSection } from 'utils/chatSection';
import { MessageContainerStyled } from './MessageContainerStyled';

export interface MessageContainerProps {
  chatRoomId: string;
}

const dummyChats: ChatMessageType[] = [
  {
    sender_id: 2,
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜsssㅜㅜ',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2021, 11, 17, 3, 24, 0),
    img_urls: null,
  },
  {
    sender_id: 2,
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜsssㅜㅜ',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2021, 11, 24, 3, 24, 0),
    img_urls: null,
  },
  {
    sender_id: 2,
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜsssㅜㅜ',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2021, 11, 24, 3, 24, 0),
    img_urls: null,
  },
  {
    sender_id: 2,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2022, 5, 1, 2, 24, 0),
    img_urls: null,
  },
  {
    sender_id: 2,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2022, 5, 1, 2, 24, 0),
    img_urls: null,
  },
  {
    sender_id: 2,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2022, 5, 1, 2, 24, 0),
    img_urls: null,
  },
  {
    sender_id: 2,
    message: null,
    img_urls: ['http://ccimg.hellomarket.com/images/2019/item/04/16/15/0725_2265814_1.jpg?size=s6'],
    message_type: ChatMessageEnum.IMAGE,
    created_at: new Date(2022, 5, 1, 2, 29, 0),
  },
  {
    sender_id: 3,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2022, 5, 1, 2, 34, 0),
    img_urls: null,
  },
  {
    sender_id: 3,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2022, 5, 1, 2, 34, 0),
    img_urls: null,
  },
  {
    sender_id: 3,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(2022, 5, 1, 2, 48, 0),
    img_urls: null,
  },
  {
    sender_id: 2,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(),
    img_urls: null,
  },
  {
    sender_id: 2,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.GENERAL,
    created_at: new Date(),
    img_urls: null,
  },
  {
    sender_id: 3,
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: ChatMessageEnum.COORDINATE,
    created_at: new Date(),
    img_urls: null,
  },
];

const MessageContainer = ({ chatRoomId }: MessageContainerProps) => {
  const { data: me } = useMe({ refetchOnWindowFocus: false });
  const { data } = useChatMessagesLoad({ chatRoomId, refetchOnWindowFocus: false });
  console.log(data);
  const [chatDayAndMinutesSection, setChatDayAndMinutesSection] = useState<Record<string, Record<string, IChat[]>>>();
  const messagesEnd = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    if (me && data) {
      setChatDayAndMinutesSection(makeChatDayAndMinutesSection(data, me.id));
    }
  }, [me, data]);
  return (
    <>
      <MessageContainerStyled>
        {chatDayAndMinutesSection &&
          Object.entries(chatDayAndMinutesSection).map(([date, chats]) => (
            <div key={date + chats}>
              <Timeline time={date} />
              <MessagesPerMinute chats={chats} />
            </div>
          ))}
        <div ref={messagesEnd}></div>
        <ChatSendBox onClickSend={() => scrollToBottom()} />
      </MessageContainerStyled>
    </>
  );
};

export default MessageContainer;
