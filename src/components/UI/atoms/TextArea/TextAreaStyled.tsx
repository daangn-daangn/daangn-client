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
  textarea::placeholder {
    color: ${(props) => props.theme.$black40};
  }
`;
