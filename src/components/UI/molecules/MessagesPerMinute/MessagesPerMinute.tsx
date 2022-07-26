import ChatMessage from '@atoms/ChatMessage/ChatMessage';
import { IChat } from 'interfaces/Chat.interface';
import { MessagesPerMinuteStyled } from './MessagesPerMinuteStyled';

export interface MessagesPerMinuteProps {
  chats: { [key: string]: IChat[] };
}

const MessagesPerMinute = ({ chats }: MessagesPerMinuteProps) => {
  const isEndMessage = (sender: string, chatMessages: IChat[], currentIndex: number) => {
    return (
      (sender === 'you' && chatMessages.length === currentIndex + 1) ||
      (sender === 'me' && chatMessages.length === currentIndex + 1) ||
      (sender === 'you' && chatMessages[currentIndex + 1] && chatMessages[currentIndex + 1].sender === 'me') ||
      (sender === 'me' && chatMessages[currentIndex + 1] && chatMessages[currentIndex + 1].sender === 'you')
    );
  };
  return (
    <MessagesPerMinuteStyled>
      {Object.entries(chats).map(([date, chatMessages]) => (
        <div key={chatMessages + date}>
          <div className="messages-wrap">
            {chatMessages.map((chat, idx) => (
              <>
                <ChatMessage
                  key={idx}
                  isShowImage={chat.sender === 'you' && idx === 0}
                  chat={chat}
                  minute={isEndMessage(chat.sender, chatMessages, idx)}
                />
              </>
            ))}
          </div>
        </div>
      ))}
    </MessagesPerMinuteStyled>
  );
};
export default MessagesPerMinute;
