import styled from '@emotion/styled';
import { ButtonProps } from './Button';

export const ButtonStyled = styled.button<ButtonProps>`
  background: ${(props) => props.background || props.theme.mainColor};
  border: none;
  border-radius: ${(props) => props.borderRedius || '5px'};
  color: ${(props) => props.fontColor || 'white'};
  padding: ${(props) => props.padding || '7px 10px'};
  font-weight: ${(props) => props.fontWeight || '600'};
  font-size: ${(props) => props.fontSize || '1rem'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  letter-spacing: -1px;
  &:hover {
    background: ${(props) => props.hoverBackground || props.theme.hoverColor};
  }
`;
