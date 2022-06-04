import { InputStyled } from './InputStyled';
import { UseFormRegisterReturn } from 'react-hook-form';

export type InputType = 'text' | 'number' | 'password' | 'email' | 'date';

export interface InputProps {
  width?: string;
  input?: string;
  border?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  type?: InputType;
  readOnly?: boolean;
  textAlign?: string;
  autoComplete?: 'off' | 'on';
}

const Input = (props: InputProps) => {
  return (
    <>
      <InputStyled {...props.register} {...props} />
    </>
  );
};

export default Input;
