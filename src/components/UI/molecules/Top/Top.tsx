import Title from '@atoms/Title/Title';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { StyledTop } from './TopStyled';
import { ReactComponent as Back } from 'assets/back.svg';
import { ReactComponent as Clsoe } from 'assets/close.svg';

export type TopLeftType = 'none' | 'prev' | 'close';
export interface TopProps {
  left?: TopLeftType;
  leftClick?: (...args: any[]) => any | undefined;
  title: string;
  mb?: string;
  right?: React.ReactNode;

  background?: string;
  borderBottom?: string;
}

const Top = (props: TopProps) => {
  const navigate = useNavigate();
  const onClickLeft = useCallback(() => {
    props.leftClick ? props.leftClick() : navigate(-1);
  }, []);

  return (
    <StyledTop {...props} left={props.left || 'none'} mb={props.mb}>
      <a onClick={onClickLeft}>
        <svg>{props.left === 'prev' ? <Back /> : props.left === 'close' ? <Clsoe /> : null}</svg>
      </a>
      <Title fontWeigt="700" fontSize="16px">
        {props.title}
      </Title>
      <div>{props.right}</div>
    </StyledTop>
  );
};

export default Top;
