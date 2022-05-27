import { InputStyled } from './InputStyled';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  width?: string;
  input?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  readOnly?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <>
      <InputStyled {...props.register} {...props} />
    </>
  );
};

export default Input;
