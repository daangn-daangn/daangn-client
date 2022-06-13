import styled from '@emotion/styled';
import { InputProps } from './Input';

export const InputStyled = styled.input<InputProps>`
  background: white;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border-radius: 8px;
  background: ${(props) => props.background || 'white'};
  border: ${(props) => props.border || `1px solid ${props.theme.mainColor}`};
  //box-shadow: 0 0 1px ${(props) => props.theme.mainColor}; // border 1.5px 처럼 보이라고
  padding: 15px 13px;
  outline: none;
  font-weight: 500;
  font-size: 0.95rem;
  color: #3f4245;
  text-align: ${(props) => props.textAlign || 'start'};
  &:hover,
  &:focus {
    border: ${(props) => props.border || `1px solid ${props.theme.mainColor}`};
    //box-shadow: 0 0 1px ${(props) => props.theme.hoverColor};
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;
