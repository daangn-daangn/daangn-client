import ChatMessage from '@atoms/ChatMessage/ChatMessage';
import Image from '@atoms/Image/Image';
import { MessagesPerMinuteStyled } from './MessagesPerMinuteStyled';

export interface IChat {
  sender: 'me' | 'you'; //보낸사람 정보. 일단은 me, you로만 구분
  message: string;
  createdAt: Date;
}

export interface MessagesPerMinuteProps {
  chats: IChat[];
}

const MessagesPerMinute = (props: MessagesPerMinuteProps) => {
  return (
    <>
      <MessagesPerMinuteStyled>
        {props.chats[0].sender === 'you' ? (
          <Image
            imgUrl="https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg"
            width="33px"
            height="33px"
            borderRedius="50%"
          />
        ) : null}
        <div className="messages-wrap">
          {props.chats.map((chat, idx) => (
            <ChatMessage key={idx} chat={chat} minute={props.chats.length === idx + 1 ? true : false} />
          ))}
        </div>
      </MessagesPerMinuteStyled>
    </>
  );
};
export default MessagesPerMinute;