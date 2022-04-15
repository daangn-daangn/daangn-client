import Input from '@atoms/Input/Input';
import Label from '@atoms/Label/Label';
import { InputTextStyled } from './InputTextStyled';

export interface InputTextProps {
  label: string;
}

const InputText = (props: InputTextProps) => {
  return (
    <>
      <InputTextStyled>
        <Label {...props}/>
        <Input />
      </InputTextStyled>
    </>
  );
};

export default InputText;
