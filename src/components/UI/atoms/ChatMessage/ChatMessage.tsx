import { ChatMessageStyled } from './ChatMessageStyled';
import Time from '@atoms/Time/Time';
import { IChat } from 'interfaces/Chat.interface';
import Image from '@atoms/Image/Image';
import Map from '@molecules/Map/Map';
import Button from '@atoms/Button/Button';

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
            {chat.message_type === 'text' ? (
              <div className="message-text me">{chat.message}</div>
            ) : chat.message_type === 'image' ? (
              <Image imgUrl={chat.message} width="80%" height="150px" borderRedius="15px" />
            ) : chat.message_type === 'location' ? (
              <div className="message-location">
                <Map latitude={33.450701} longitude={126.570667} disabledMouseEvent={true} />
                <Button background="#f5f5f5" hoverBackground="#e9e9e9" fontColor="#3f3f3f" fontSize="0.9rem">
                  장소 보기
                </Button>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="message-container justify-start">
            {chat.message_type === 'text' ? (
              <div className="message-text me">{chat.message}</div>
            ) : chat.message_type === 'image' ? (
              <Image imgUrl={chat.message} width="80%" height="150px" borderRedius="15px" />
            ) : chat.message_type === 'location' ? (
              <div className="message-location">
                <Map latitude={33.450701} longitude={126.570667} disabledMouseEvent={true} />
                <Button background="#f5f5f5" hoverBackground="#e9e9e9" fontColor="#3f3f3f" fontSize="0.9rem">
                  장소 보기
                </Button>
              </div>
            ) : null}
            {minute ? <Time time={chat.createdAt} exactTime={true} /> : null}
          </div>
        )}
      </ChatMessageStyled>
    </>
  );
};
export default ChatMessage;
