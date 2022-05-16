import Input from '@atoms/Input/Input';
import Label from '@atoms/Label/Label';
import { InputTextStyled } from './InputTextStyled';

export interface InputTextProps {
  label: string;
  placeholder?: string;
}

const InputText = (props: InputTextProps) => {
  return (
    <>
      <InputTextStyled>
        <Label {...props} />
        <Input {...props} />
      </InputTextStyled>
    </>
  );
};

export default InputText;
