import { MessageStyled } from './MessageStyled';

export interface MessageProps {
  message?: string;
}

const Message = (props: MessageProps) => {
  return (
    <>
      <MessageStyled>{props.message}</MessageStyled>
    </>
  );
};

export default Message;
