import { forwardRef } from 'react';
import { InputStyled } from './InputStyled';

export interface InputProps {
  width?: string;
  input?: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return (
    <>
      <InputStyled ref={ref} {...props} />
    </>
  );
});
Input.displayName = 'Input';
export default Input;
