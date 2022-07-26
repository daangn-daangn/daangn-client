import Spinner from '@atoms/Spinner/Spinner';
import ChatBox from '@molecules/ChatBox/ChatBox';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import NavBar from '@organisms/NavBar/NavBar';
import TabBar from '@organisms/TabBar/TabBar';
import ErrorBoundary from 'components/ErrorBoundary';
import useChatRoomsLoad from 'hooks/queries/chat/useChatRoomsLoad';
import { Link } from 'react-router-dom';
import { ChatPageStyled } from './ChatPageStyled';
import { ERROR_MSG } from 'constants/message';
import useLogOut from 'hooks/common/useLogOut';

const ChatPage = () => {
  useLogOut();
  return (
    <ChatPageStyled>
      <NavBar type="채팅" />
      <div className="chatsWrapper">
        <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_DATA} />}>
          <ChatRoomContainer />
        </ErrorBoundary>
      </div>
      <TabBar />
    </ChatPageStyled>
  );
};

const ChatRoomContainer = () => {
  const { data: chatRooms } = useChatRoomsLoad({ refetchOnWindowFocus: false });
  return (
    <>
      {chatRooms?.map((chatRoom, index) => (
        <Link key={index} to={`/chat/${chatRoom.chat_room_id}`}>
          <ChatBox chat={chatRoom} />
        </Link>
      ))}
    </>
  );
};

export default ChatPage;
