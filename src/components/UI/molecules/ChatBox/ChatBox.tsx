import Image from '../../atoms/Image/Image';
import Time from '../../atoms/Time/Time';
import { StyledChatBox } from './ChatBoxStyled';

export interface ChatBoxProps {
  profileURL: string;
  nickname: string;
  location: string;
  prev_chatTime: Date;
  thumb_nail_image: string;
  recent_chat: string;
}

const trimWriting = (writing: string, limit: number): string => {
  if (writing.length > limit) {
    return writing.substring(0, limit) + '...';
  } else {
    return writing;
  }
};

const ChatBox = ({ profileURL, nickname, location, prev_chatTime, thumb_nail_image, recent_chat }: ChatBoxProps) => {
  return (
    <StyledChatBox>
      <Image width="55px" height="55px" borderRedius="50%" imgUrl={profileURL} />
      <div className="chatBox_info">
        <div>
          <span className="chatBox_info-nickname">{nickname}</span>
          <span className="chatBox_info-location">{location}</span>
          <span className="chatBox_info-dot">&#183;</span>
          <Time time={prev_chatTime} />
        </div>
        <p>{trimWriting(recent_chat, 14)}</p>
      </div>
      <Image width="40px" height="40px" imgUrl={thumb_nail_image} />
    </StyledChatBox>
  );
};

export default ChatBox;
