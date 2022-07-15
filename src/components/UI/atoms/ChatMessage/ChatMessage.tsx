import { useNavigate } from 'react-router-dom';
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
  imagesCount?: number;
}

const dummyImages = [
  'http://ccimg.hellomarket.com/images/2019/item/04/16/15/0725_2265814_1.jpg?size=s6',
  'http://ccimg.hellomarket.com/images/2020/item/11/15/19/2334146_1286291_1.jpg?size=s6',
  'http://thumbnail.10x10.co.kr/webimage/image/basic600/89/B000893431.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
  'http://ccimg.hellomarket.com/images/2019/item/04/16/15/0725_2265814_1.jpg?size=s6',
  'http://ccimg.hellomarket.com/images/2020/item/11/15/19/2334146_1286291_1.jpg?size=s6',
  'http://thumbnail.10x10.co.kr/webimage/image/basic600/89/B000893431.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
];

const ChatMessage: React.FC<ChatMessageProps> = ({ isShowImage, minute, chat }, props) => {
  const navigate = useNavigate();
  const clickImage = (idx: number) => {
    console.log('ddd');
    navigate('/image', {
      state: {
        currentIdx: idx,
        slides: {
          images: dummyImages,
        },
      },
    });
  };

  return (
    <>
      <ChatMessageStyled {...props} isShowImage={isShowImage} chat={chat} imagesCount={dummyImages.length}>
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
              <div className="message-image">
                {dummyImages.length > 4
                  ? dummyImages
                      .slice(0, 4)
                      .map((item, idx) => (
                        <Image
                          onClick={() => clickImage(idx)}
                          key={idx}
                          imgUrl={item}
                          width="100%"
                          height="150px"
                          borderRedius="0px"
                          innerContent={idx === 3 ? `+${dummyImages.length - 4}` : ''}
                        />
                      ))
                  : dummyImages.map((item, idx) => (
                      <Image
                        onClick={() => clickImage(idx)}
                        key={idx}
                        imgUrl={item}
                        width="100%"
                        height="150px"
                        borderRedius="0px"
                      />
                    ))}
              </div>
            ) : chat.message_type === 'location' ? (
              <div className="message-location">
                <Map />
                <Button background="#f5f5f5" hoverBackground="#e9e9e9" fontColor="#3f3f3f" fontSize="0.9rem">
                  장소 보기
                </Button>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="message-container justify-start">
            {chat.message_type === 'text' ? (
              <div className="message-text you">{chat.message}</div>
            ) : chat.message_type === 'image' ? (
              <div className="message-image">
                {dummyImages.length > 4
                  ? dummyImages
                      .slice(0, 4)
                      .map((item, idx) => (
                        <Image
                          onClick={() => clickImage(idx)}
                          key={idx}
                          imgUrl={item}
                          width="100%"
                          height="150px"
                          borderRedius="0px"
                          innerContent={idx === 3 ? `+${dummyImages.length - 4}` : ''}
                        />
                      ))
                  : dummyImages.map((item, idx) => (
                      <Image
                        onClick={() => clickImage(idx)}
                        key={idx}
                        imgUrl={item}
                        width="100%"
                        height="150px"
                        borderRedius="0px"
                      />
                    ))}
              </div>
            ) : chat.message_type === 'location' ? (
              <div className="message-location">
                <Map />
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
