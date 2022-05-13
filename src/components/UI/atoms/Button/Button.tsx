import { ButtonStyled } from './ButtonStyled';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fontSize?: string;
  width?: string;
  height?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <ButtonStyled {...props} type={props.type || 'button'}>
        {props.children}
      </ButtonStyled>
    </>
  );
};
export default Button;
