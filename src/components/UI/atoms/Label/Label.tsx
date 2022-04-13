import { LabelStyled } from './LabelStyled';

export interface LabelProps {
  label: string;
}

const Label = (props: LabelProps) => {
  return (
    <>
      <LabelStyled>{props.label}</LabelStyled>
    </>
  );
};

export default Label;
