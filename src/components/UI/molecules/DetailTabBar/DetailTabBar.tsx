import { useState, useEffect, useCallback } from 'react';
import { DetailTabBarStyled } from './DetailTabBarStyled';
import { ReactComponent as Home } from '../../../../assets/home.svg';
import { ReactComponent as Back } from '../../../../assets/back-thick.svg';
import { Link } from 'react-router-dom';

export interface DetailTabBarProps {
  isScroll?: boolean;
}

const DetailTabBar = (props: DetailTabBarProps) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    window.pageYOffset > 350 ? setIsScroll(true) : setIsScroll(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <DetailTabBarStyled isScroll={isScroll}>
        <Back width="18" height="18" />
        <Link to="/">
          <Home width="18" height="18" />
        </Link>
      </DetailTabBarStyled>
    </>
  );
};
export default DetailTabBar;
