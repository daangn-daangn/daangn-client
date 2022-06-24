import Timeline from '@atoms/Timeline/Timeline';
import ChatSendBox from '@molecules/ChatSendBox/ChatSendBox';
import MessagesPerMinute from '@molecules/MessagesPerMinute/MessagesPerMinute';
import { IChat } from 'interfaces/Chat.interface';
import { useEffect, useRef, useState } from 'react';
import { makeChatDayAndMinutesSection } from 'utils/chatSection';
import { MessageContainerStyled } from './MessageContainerStyled';

export interface MessageContainerProps {}

const dummyChats: IChat[] = [
  {
    sender: 'you',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜsssㅜㅜ',
    message_type: 'text',
    createdAt: new Date(2021, 11, 17, 3, 24, 0),
  },
  {
    sender: 'you',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜsssㅜㅜ',
    message_type: 'text',
    createdAt: new Date(2021, 11, 24, 3, 24, 0),
  },
  {
    sender: 'you',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜsssㅜㅜ',
    message_type: 'text',
    createdAt: new Date(2021, 11, 24, 3, 24, 0),
  },
  {
    sender: 'you',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(2022, 5, 1, 2, 24, 0),
  },
  {
    sender: 'you',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(2022, 5, 1, 2, 24, 0),
  },
  {
    sender: 'you',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(2022, 5, 1, 2, 24, 0),
  },
  {
    sender: 'you',
    message: 'http://ccimg.hellomarket.com/images/2019/item/04/16/15/0725_2265814_1.jpg?size=s6',
    message_type: 'image',
    createdAt: new Date(2022, 5, 1, 2, 29, 0),
  },
  {
    sender: 'me',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(2022, 5, 1, 2, 34, 0),
  },
  {
    sender: 'me',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(2022, 5, 1, 2, 34, 0),
  },
  {
    sender: 'me',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(2022, 5, 1, 2, 48, 0),
  },
  {
    sender: 'you',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(),
  },
  {
    sender: 'you',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(),
  },
  {
    sender: 'me',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'location',
    createdAt: new Date(),
  },
  {
    sender: 'me',
    message: '다음 번에 꼭 같이 거래해요~!',
    message_type: 'text',
    createdAt: new Date(),
  },
];

const MessageContainer = (props: MessageContainerProps) => {
  const messagesEnd = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const chatDayAndMinutesSection = makeChatDayAndMinutesSection(dummyChats);
  return (
    <>
      <MessageContainerStyled>
        {Object.entries(chatDayAndMinutesSection).map(([date, chats]) => (
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
