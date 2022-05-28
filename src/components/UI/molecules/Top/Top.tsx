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
}

const Top = ({ left, leftClick, title, right, mb }: TopProps) => {
  const navigate = useNavigate();
  const onClickArrow = useCallback(() => {
    navigate(-1);
    if (leftClick !== undefined) leftClick();
  }, []);
  return (
    <StyledTop left={left || 'none'} mb={mb}>
      <a onClick={onClickArrow}>
        <svg>{left === 'prev' ? <Back /> : left === 'close' ? <Clsoe /> : null}</svg>
      </a>
      <Title fontWeigt="700" fontSize="16px">
        {title}
      </Title>
      <div>{right}</div>
    </StyledTop>
  );
};

export default Top;
