import styled from '@emotion/styled';
import { ButtonProps } from './Button';

export const ButtonStyled = styled.button<ButtonProps>`
  background: ${(props) => props.theme.mainColor};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  font-size: ${(props) => props.fontSize || '1rem'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  letter-spacing: -1px;
  &:hover {
    background: ${(props) => props.theme.hoverColor};
  }
`;
