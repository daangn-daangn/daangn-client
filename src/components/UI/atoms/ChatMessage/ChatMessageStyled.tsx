import styled from '@emotion/styled';
import { ChatMessageProps } from './ChatMessage';

export const ChatMessageStyled = styled.div<ChatMessageProps>`
  .message-container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 3px;
    gap: 3px;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }

  .message-text {
    display: inline-block;
    border: none;
    border-radius: 15px;
    padding: 10px;
    width: auto;
    max-width: 80%;
    font-size: 0.9rem;
    word-wrap: break-word;
  }
  .me {
    background: ${(props) => props.theme.mainColor};
    color: white;
  }
  .you {
    background: ${(props) => props.theme.$black20};
    color: black;
  }
`;
