import { CheckBoxStyled } from './CheckBoxStyled';
import { ReactComponent as CheckSVG } from 'assets/checkBox.svg';
import { Dispatch, SetStateAction, useState } from 'react';

export interface CheckBoxProps {
  text: string;
  setIsCheck: Dispatch<SetStateAction<boolean>>;
}

const CheckBox = (props: CheckBoxProps) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <CheckBoxStyled ischecked={isCheck} onClick={() => setIsCheck((prev) => !prev)}>
      <div className="checkBox_Wrapper">
        <CheckSVG />
      </div>
      <span>check</span>
    </CheckBoxStyled>
  );
};

export default CheckBox;
