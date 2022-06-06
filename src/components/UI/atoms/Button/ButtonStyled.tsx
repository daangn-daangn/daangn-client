import styled from '@emotion/styled';
import { ButtonProps } from './Button';

export const ButtonStyled = styled.button<ButtonProps>`
  background: ${(props) => props.background || props.theme.mainColor};
  border-radius: ${(props) => props.borderRedius || '5px'};
  border: ${(props) => props.border || 'none'};
  color: ${(props) => props.fontColor || 'white'};
  padding: ${(props) => props.padding || '7px 10px'};
  font-weight: ${(props) => props.fontWeight || '600'};
  font-size: ${(props) => props.fontSize || '1rem'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  letter-spacing: -1px;
  box-sizing: border-box;
  &:hover {
    background: ${(props) => props.hoverBackground || props.theme.hoverColor};
  }
  &:disabled {
    background: ${(props) => props.theme.$black30};
  }
`;
