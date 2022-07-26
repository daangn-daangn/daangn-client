import Spinner from '@atoms/Spinner/Spinner';
import ChatTabBar from '@molecules/ChatTabBar/ChatTabBar';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import ProductInfoBox from '@molecules/ProductInfoBox/ProductInfoBox';
import MessageContainer from '@organisms/MessageContainer/MessageContainer';
import ErrorBoundary from 'components/ErrorBoundary';
import { PRODUCT_DEFAULT_IMAGE } from 'constants/defaultImages';
import { ERROR_MSG } from 'constants/message';
import useSetLocation from 'hooks/common/useSetLocation';
import useChatRoomDetail from 'hooks/queries/chat/useChatRoomDetail';
import { ProductState } from 'interfaces/Product.interface';
import { useParams } from 'react-router-dom';
import { ChatRoomPageStyled } from './ChatRoomPageStyled';

export const dummyProductInfoBox = {
  product_image: PRODUCT_DEFAULT_IMAGE,
  product_title: 'TEST',
  product_state: ProductState.FOR_SALE,
  product_price: 20000,
};

const ChatRoomPage = () => {
  const [userLocation, setUserLocation] = useSetLocation();
  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  const { data } = useChatRoomDetail({ chatRoomId, refetchOnWindowFocus: false });

  if (!data) {
    return <Spinner />;
  }

  return (
    <ChatRoomPageStyled>
      <div className="chatRoom_fixed">
        <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_CHAT_ROOM} />}>
          <ChatTabBar userDetail={{ nickname: data.participant_nickname, manner: data.participant_manner }} />
          <ProductInfoBox product={data} />
        </ErrorBoundary>
      </div>
      <MessageContainer chatRoomId={chatRoomId as string} />
    </ChatRoomPageStyled>
  );
};

export default ChatRoomPage;
