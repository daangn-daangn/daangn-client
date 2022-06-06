import styled from '@emotion/styled';
import { MessageProps } from './Message';

export const MessageStyled = styled.span<MessageProps>`
  color: ${(props) => props.color || 'red'};
  font-weight: 500;
  font-size: 0.8rem;
`;
