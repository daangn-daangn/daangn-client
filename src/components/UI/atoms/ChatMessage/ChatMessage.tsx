import { ChatMessageStyled } from './ChatMessageStyled';
import Time from '@atoms/Time/Time';
import { IChat } from 'interfaces/Chat.interface';
import Image from '@atoms/Image/Image';

export interface ChatMessageProps {
  minute?: boolean; //해당 분에 마지막인지 아닌지 (마지막이면 Time 보여줌)
  chat: IChat;
  isShowImage: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ isShowImage, minute, chat }, props) => {
  return (
    <>
      <ChatMessageStyled {...props} isShowImage={isShowImage} chat={chat}>
        {isShowImage ? (
          <Image
            imgUrl="https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg"
            width="33px"
            height="33px"
            borderRedius="50%"
          />
        ) : null}
        {chat.sender === 'me' ? (
          <div className="message-container justify-end">
            {minute ? <Time time={chat.createdAt} exactTime={true} /> : null}
            <div className="message-text me">{chat.message}</div>
          </div>
        ) : (
          <div className="message-container justify-start">
            <div className="message-text you">{chat.message}</div>
            {minute ? <Time time={chat.createdAt} exactTime={true} /> : null}
          </div>
        )}
      </ChatMessageStyled>
    </>
  );
};
export default ChatMessage;
