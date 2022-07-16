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
  msgColor?: string;
}

const InputText = ({ msgColor, ...props }: InputTextProps) => {
  return (
    <>
      <InputTextStyled>
        <Label {...props} />
        <Input {...props} />
        <Message color={msgColor} {...props} />
      </InputTextStyled>
    </>
  );
};

export default InputText;
