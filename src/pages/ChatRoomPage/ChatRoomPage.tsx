import ChatTabBar from '@molecules/ChatTabBar/ChatTabBar';
import ProductInfoBox from '@molecules/ProductInfoBox/ProductInfoBox';
import MessageContainer from '@organisms/MessageContainer/MessageContainer';
import { dummyProduct } from 'pages/ProductDetailPage/ProductDetailPage';
import { ChatRoomPageStyled } from './ChatRoomPageStyled';

const ChatRoomPage = () => {
  return (
    <ChatRoomPageStyled>
      <div className="chatRoom_fixed">
        <ChatTabBar userDetail={{ nickname: '이재훈', manner: 46 }} />
        <ProductInfoBox product={dummyProduct} />
      </div>
      <MessageContainer />
    </ChatRoomPageStyled>
  );
};

export default ChatRoomPage;
