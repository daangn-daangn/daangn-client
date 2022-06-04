import { MessageStyled } from './MessageStyled';

export interface MessageProps {
  message?: string;
  color?: string;
}

const Message = (props: MessageProps) => {
  return (
    <>
      <MessageStyled {...props}>{props.message}</MessageStyled>
    </>
  );
};

export default Message;
