import { CheckBoxStyled } from './CheckBoxStyled';
import { ReactComponent as CheckSVG } from 'assets/checkBox.svg';

export interface CheckBoxProps {
  text: string;
  isCheck: boolean;
}

const CheckBox = ({ text, isCheck }: CheckBoxProps) => {
  return (
    <CheckBoxStyled ischecked={isCheck}>
      <div className="checkBox_Wrapper">
        <CheckSVG />
      </div>
      <span>{text}</span>
    </CheckBoxStyled>
  );
};

export default CheckBox;
