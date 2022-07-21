import TextareaAutosize from 'react-autosize-textarea';
import { TextAreaStyled } from './TextAreaStyled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  register?: UseFormRegisterReturn;
  placeholder_color?: string;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <>
      <TextAreaStyled placeholder_color={props.placeholder_color}>
        <TextareaAutosize {...props} {...props.register}>
          {props.children}
        </TextareaAutosize>
      </TextAreaStyled>
    </>
  );
};

export default TextArea;
