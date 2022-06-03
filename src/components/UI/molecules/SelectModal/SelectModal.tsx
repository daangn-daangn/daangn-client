import { Dispatch, SetStateAction } from 'react';
import { SelectModalStyled, SelectModalWrapper } from './SelectModalStyled';

export interface SelectModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  title?: string;
  selects: { content: string; function: () => void }[];
}

const SelectModal = (props: SelectModalProps) => {
  const onClickModalWrapper = () => {
    props.setModal((prev) => !prev);
  };
  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const onClickChangeState = () => {
    //Product State Change API
    //성공하면
    props.setModal((prev) => !prev);
  };

  return (
    <SelectModalWrapper onClick={onClickModalWrapper}>
      <SelectModalStyled onClick={onClickModal} {...props}>
        {props.title ? <div className="selectModal_title">{props.title}</div> : null}
        <div className="selectModal_buttons">
          {props.selects.map((select) => (
            <div key={select.content} className="selectModal_button" onClick={select.function}>
              {select.content}
            </div>
          ))}
        </div>
      </SelectModalStyled>
    </SelectModalWrapper>
  );
};

export default SelectModal;
