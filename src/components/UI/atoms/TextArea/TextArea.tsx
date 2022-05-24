import TextareaAutosize from 'react-autosize-textarea';
import { TextAreaStyled } from './TextAreaStyled';

export interface TextAreaProps {
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <>
      <TextAreaStyled>
        <TextareaAutosize placeholder={props.placeholder}>{props.children}</TextareaAutosize>
      </TextAreaStyled>
    </>
  );
};

export default TextArea;
