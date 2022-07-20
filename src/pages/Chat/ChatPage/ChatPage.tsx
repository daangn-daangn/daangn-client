import Spinner from '@atoms/Spinner/Spinner';
import ChatBox from '@molecules/ChatBox/ChatBox';
import NavBar from '@organisms/NavBar/NavBar';
import TabBar from '@organisms/TabBar/TabBar';
import useChatRoomsLoad from 'hooks/queries/chat/useChatRoomsLoad';
import { Link } from 'react-router-dom';
import { ChatPageStyled } from './ChatPageStyled';

const ChatPage = () => {
  const { data: chatRooms } = useChatRoomsLoad();
  if (!chatRooms) {
    return <Spinner />;
  }
  return (
    <ChatPageStyled>
      <NavBar type="채팅" />
      <div className="chatsWrapper">
        {chatRooms.map((chatRoom, index) => (
          <Link key={index} to={`/chat/${chatRoom.chat_room_id}`}>
            <ChatBox chat={chatRoom} />
          </Link>
        ))}
      </div>
      <TabBar />
    </ChatPageStyled>
  );
};

export default ChatPage;
