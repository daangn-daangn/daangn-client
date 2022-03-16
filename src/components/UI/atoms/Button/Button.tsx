import React from "react";
import { ButtonStyled } from './ButtonStyled';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fontSize?: number;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <ButtonStyled {...props} >
        {props.children}
      </ButtonStyled>
    </>
  );
};
export default Button;