import Input from '@atoms/Input/Input';
import Label from '@atoms/Label/Label';
import Message from '@atoms/Message/Message';
import { UseFormRegisterReturn } from 'react-hook-form';
import { InputTextStyled } from './InputTextStyled';

export interface InputTextProps {
  label: string;
  message?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  register?: UseFormRegisterReturn;
  readOnly?: boolean;
}

const InputText = (props: InputTextProps) => {
  return (
    <>
      <InputTextStyled>
        <Label {...props} />
        <Input {...props} />
        <Message {...props} />
      </InputTextStyled>
    </>
  );
};

export default InputText;
