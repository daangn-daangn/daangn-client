import ChatTabBar from '@molecules/ChatTabBar/ChatTabBar';
import ProductInfoBox from '@molecules/ProductInfoBox/ProductInfoBox';
import MessageContainer from '@organisms/MessageContainer/MessageContainer';
import useSetLocation from 'hooks/common/useSetLocation';
import { dummyProduct } from 'pages/Product/ProductDetailPage/ProductDetailPage';
import { ChatRoomPageStyled } from './ChatRoomPageStyled';

const ChatRoomPage = () => {
  const [userLocation, setUserLocation] = useSetLocation();
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
