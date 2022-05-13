import { InputStyled } from './InputStyled';

export interface InputProps {
  width?: string;
  input?: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  return (
    <>
      <InputStyled {...props} />
    </>
  );
};

export default Input;
