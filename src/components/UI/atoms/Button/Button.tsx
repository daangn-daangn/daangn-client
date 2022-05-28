import { ButtonStyled } from './ButtonStyled';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
  background?: string;
  hoverBackground?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: string;
  padding?: string;
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
