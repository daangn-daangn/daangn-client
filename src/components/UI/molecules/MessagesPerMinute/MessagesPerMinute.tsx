import ChatMessage from '@atoms/ChatMessage/ChatMessage';
import Image from '@atoms/Image/Image';
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
      (sender === 'you' && chatMessages.length === currentIndex + 1) ||
      (sender === 'you' && chatMessages[currentIndex + 1] && chatMessages[currentIndex + 1].sender === 'me') ||
      (sender === 'me' && chatMessages[currentIndex + 1] && chatMessages[currentIndex + 1].sender === 'you')
    );
  };
  return (
    <>
      {Object.entries(chats).map(([date, chatMessages]) => (
        <MessagesPerMinuteStyled key={chatMessages + date}>
          <div className="messages-wrap">
            {chatMessages.map((chat, idx) => (
              <div key={chat.message + idx}>
                {chat.sender === 'you' && idx === 0 ? (
                  <Image
                    imgUrl="https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg"
                    width="33px"
                    height="33px"
                    borderRedius="50%"
                  />
                ) : null}
                <ChatMessage key={idx} chat={chat} minute={isEndMessage(chat.sender, chatMessages, idx)} />
              </div>
            ))}
          </div>
        </MessagesPerMinuteStyled>
      ))}
    </>
  );
};
export default MessagesPerMinute;
