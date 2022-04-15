import InputText from '@molecules/InputText/InputText';
import Message from '@atoms/Message/Message';
import { FormStyled } from './FormStyled';

export interface FormProps {
  label: string;
  message: string;
}

const Form = (props: FormProps) => {
  return (
    <>
      <FormStyled>
        <InputText {...props}/>
        <Message {...props} />
      </FormStyled>
    </>
  );
};

export default Form;
