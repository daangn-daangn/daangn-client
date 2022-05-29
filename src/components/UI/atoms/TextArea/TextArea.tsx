import TextareaAutosize from 'react-autosize-textarea';
import { TextAreaStyled } from './TextAreaStyled';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextAreaProps {
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <>
      <TextAreaStyled>
        <TextareaAutosize {...props} {...props.register}>
          {props.children}
        </TextareaAutosize>
      </TextAreaStyled>
    </>
  );
};

export default TextArea;
