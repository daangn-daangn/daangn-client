import Input from '@atoms/Input/Input';
import Label from '@atoms/Label/Label';
import { InputTextStyled } from './InputTextStyled';

export interface InputTextProps {
  label: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const InputText = ({ inputRef, ...props }: InputTextProps) => {
  return (
    <>
      <InputTextStyled>
        <Label {...props} />
        <Input ref={inputRef} {...props} />
      </InputTextStyled>
    </>
  );
};

export default InputText;
