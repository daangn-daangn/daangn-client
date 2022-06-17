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
        flex: 1;
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
      .message-image {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 80%;
        background: white;
        border-radius: 15px;
        gap: 1px;
        overflow: hidden;
        div:last-of-type {
          grid-column: ${props.imagesCount && props.imagesCount % 2 === 1 ? 'span 2' : null};
        }
      }
      .message-location {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 220px;
        border: 1px solid ${props.theme.$black20};
        border-radius: 15px;
        overflow: hidden;
        button {
          margin: 10px;
        }
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
