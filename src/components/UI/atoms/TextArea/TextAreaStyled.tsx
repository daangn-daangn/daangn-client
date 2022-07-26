import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TextAreaProps } from './TextArea';

export const TextAreaStyled = styled.div<TextAreaProps>`
  width: 100%;
  textarea {
    width: 100%;
    resize: none;
    font-size: 0.9rem;
    border: none;
    border-radius: 15px;
    padding: 10px;
    word-wrap: break-word;
    &:focus {
      border: none;
      outline: none;
    }
  }
  ${(props) => {
    const color = props.placeholder_color || props.theme.$black40;
    return css`
      textarea::placeholder {
        color: ${color};
      }
    `;
  }}
`;
