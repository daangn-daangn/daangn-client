import { SlideButtonStyled } from './SlideButtonStyled';

export interface SlideButtonProps {
  direction?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SlideButton = (props: SlideButtonProps) => {
  return (
    <>
      <SlideButtonStyled {...props}>
        {props.direction === "previous" ? <span role="img">&#8249;</span> : null}
        {props.direction === "next" ? <span role="img">&#8250;</span> : null}
      </SlideButtonStyled>
    </>
  );
};

export default SlideButton;
