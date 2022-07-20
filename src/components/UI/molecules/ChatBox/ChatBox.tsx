import { PRODUCT_DEFAULT_IMAGE } from 'constants/defaultImages';
import { IGetChat } from 'interfaces/Chat.interface';
import Image from '../../atoms/Image/Image';
import Time from '../../atoms/Time/Time';
import { StyledChatBox } from './ChatBoxStyled';

export interface ChatBoxProps {
  chat: IGetChat;
}

const trimWriting = (writing: string, limit: number): string => {
  if (writing.length > limit) {
    return writing.substring(0, limit) + '...';
  } else {
    return writing;
  }
};

const ChatBox = ({ chat }: ChatBoxProps) => {
  return (
    <StyledChatBox>
      <Image width="55px" height="55px" borderRedius="50%" imgUrl={chat.participant_image} />
      <div className="chatBox_info">
        <div>
          <span className="chatBox_info-nickname">{chat.participant}</span>
          <span className="chatBox_info-location">{chat.location}</span>
          <span className="chatBox_info-dot">&#183;</span>
          <Time time={chat.updated_at} />
        </div>
        <p>{trimWriting(chat.last_chat || '채팅을 시작해 보세요!', 14)}</p>
      </div>
      <Image width="40px" height="40px" imgUrl={chat.product_image || PRODUCT_DEFAULT_IMAGE} />
    </StyledChatBox>
  );
};

export default ChatBox;
