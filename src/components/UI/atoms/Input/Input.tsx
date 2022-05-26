import { forwardRef } from 'react';
import { InputStyled } from './InputStyled';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  width?: string;
  input?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return (
    <>
      <InputStyled ref={ref} {...props.register} {...props} />
    </>
  );
});
Input.displayName = 'Input';
export default Input;
