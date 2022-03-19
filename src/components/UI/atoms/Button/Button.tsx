import { ButtonStyled } from './ButtonStyled';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fontSize?: string;
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