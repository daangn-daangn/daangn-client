import Title from '@atoms/Title/Title';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { StyledTop } from './TopStyled';

export interface TopProps {
  isPrevArrow: boolean;
  title: string;
  mb?: string;
}

const Top = ({ isPrevArrow, title, mb }: TopProps) => {
  const navigate = useNavigate();
  const onClickArrow = useCallback(() => {
    navigate(-1);
  }, []);
  return (
    <StyledTop isPrevArrow={isPrevArrow} mb={mb}>
      {isPrevArrow && (
        <a onClick={onClickArrow}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.67 3.87001L9.9 2.10001L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.87001Z" fill="#434343" />
          </svg>
        </a>
      )}
      <Title fontWeigt="400" fontSize="16px">
        {title}
      </Title>
    </StyledTop>
  );
};

export default Top;
