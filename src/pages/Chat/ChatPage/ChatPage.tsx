import ChatBox from '@molecules/ChatBox/ChatBox';
import NavBar from '@organisms/NavBar/NavBar';
import TabBar from '@organisms/TabBar/TabBar';
import useChatRoomsLoad from 'hooks/queries/chat/useChatRoomsLoad';
import { dummyGetChats } from 'interfaces/Chat.interface';
import { Link } from 'react-router-dom';
import { ChatPageStyled } from './ChatPageStyled';

const ChatPage = () => {
  // const { data } = useChatRoomsLoad();
  // console.log(data);
  return (
    <ChatPageStyled>
      <NavBar type="채팅" />
      <div className="chatsWrapper">
        {dummyGetChats.map((chat, index) => (
          <Link key={index} to={`/chat/${chat.chat_room_id}`}>
            <ChatBox chat={chat} />
          </Link>
        ))}
      </div>
      <TabBar />
    </ChatPageStyled>
  );
};

export default ChatPage;
