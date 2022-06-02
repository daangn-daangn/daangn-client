import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChatMessageProps } from './ChatMessage';

export const ChatMessageStyled = styled.div<ChatMessageProps>`
  ${(props) => {
    return css`
      display: ${props.isShowImage && 'flex'};
      gap: ${props.isShowImage && '10px'};
      margin-left: ${!props.isShowImage && props.chat.sender === 'you' ? '43px' : '0px'};
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
        background: ${props.theme.mainColor};
        color: white;
      }
      .you {
        background: ${props.theme.$black20};
        color: black;
      }
    `;
  }}
`;
