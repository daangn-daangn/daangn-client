import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button<ButtonProps>`
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

export interface ButtonProps {
  contents?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fontSize?: number;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <StyledButton {...props} >
        {props.contents}
      </StyledButton>
    </>
  );
};
export default Button;