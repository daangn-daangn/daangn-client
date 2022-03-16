import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button<ButtonProps>`
  background: ${props => (props.theme.mainColor)};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  font-size: ${(props) => `${props.fontSize}rem` || '1rem'};
  letter-spacing: -1px;
  &:hover {
    background: ${props => (props.theme.hoverColor)};
  }
`;