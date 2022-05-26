import Timeline from '@atoms/Timeline/Timeline';
import ChatSendBox from '@molecules/ChatSendBox/ChatSendBox';
import MessagesPerMinute from '@molecules/MessagesPerMinute/MessagesPerMinute';
import { IChat } from 'interfaces/Chat.interface';
import { useEffect, useRef, useState } from 'react';
import { MessageContainerStyled } from './MessageContainerStyled';

export interface MessageContainerProps {}

const dummyChats: IChat[] = [
  {
    sender: 'you',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    createdAt: new Date(),
  },
  {
    sender: 'you',
    message: '다음 번에 꼭 같이 거래해요~!',
    createdAt: new Date(),
  },
];

const dummyChats2: IChat[] = [
  {
    sender: 'me',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    createdAt: new Date(),
  },
  {
    sender: 'me',
    message: '다음 번에 꼭 같이 거래해요~!',
    createdAt: new Date(),
  },
];

const MessageContainer = (props: MessageContainerProps) => {
  const messagesEnd = useRef<HTMLDivElement>(null);
  const [chatMessages, setChatMessages] = useState<number[]>([1, 2]);
  const scrollToBottom = () => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <>
      <MessageContainerStyled>
        <Timeline time={new Date()} />
        <div className="messages">
          {chatMessages.map(() => (
            <>
              <MessagesPerMinute chats={dummyChats} />
              <MessagesPerMinute chats={dummyChats2} />
            </>
          ))}
        </div>
        <div ref={messagesEnd}></div>
        <ChatSendBox onClickSend={() => setChatMessages((prev) => [...prev, 1])} />
      </MessageContainerStyled>
    </>
  );
};

export default MessageContainer;
