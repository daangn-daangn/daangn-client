import { useState, useRef } from 'react';
import { ChatSendBoxStyled } from './ChatSendBoxStyled';
import TextArea from '@atoms/TextArea/TextArea';
import { ReactComponent as Plus } from 'assets/plus.svg';
import { ReactComponent as Send } from 'assets/send.svg';
import { ReactComponent as Location } from 'assets/location.svg';
import { ReactComponent as Picture } from 'assets/picture.svg';

export interface ChatSendBoxProps {
  onClickSend: () => void;
}

const ChatSendBox = ({ onClickSend }: ChatSendBoxProps) => {
  const [plusModal, setPlusModal] = useState<boolean>(false);

  const InputFileRef = useRef<HTMLInputElement>(null);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files);
    }
  };

  const clickInputPicture = () => {
    InputFileRef.current?.click();
  };

  const clickInputLocation = () => {
    // 장소 공유 페이지로 이동
  };

  return (
    <>
      <ChatSendBoxStyled>
        <div className="div-stair">
          <Plus onClick={() => setPlusModal(!plusModal)} />
          <TextArea placeholder="메시지를 입력하세요." />
          <Send onClick={onClickSend} />
        </div>
        {plusModal ? (
          <div className="div-stair plus-modal">
            <div className="chat-item">
              <input
                ref={InputFileRef}
                id="hidden-input-file"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelected}
              />
              <div className="chat-item_icon-wrap" onClick={clickInputPicture}>
                <Picture />
              </div>
              <p>사진</p>
            </div>
            <div className="chat-item">
              <div className="chat-item_icon-wrap" onClick={clickInputLocation}>
                <Location />
              </div>
              <p>장소</p>
            </div>
          </div>
        ) : null}
      </ChatSendBoxStyled>
    </>
  );
};

export default ChatSendBox;
