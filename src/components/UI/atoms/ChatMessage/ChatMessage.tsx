import { ChatMessageStyled } from './ChatMessageStyled';
import Time from '@atoms/Time/Time';
import { IChat } from 'interfaces/Chat.interface';

export interface ChatMessageProps {
  minute?: boolean; //해당 분에 마지막인지 아닌지 (마지막이면 Time 보여줌)
  chat: IChat;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ minute, chat }, props) => {
  return (
    <>
      <ChatMessageStyled {...props}>
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
