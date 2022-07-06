import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { TabBarStyled } from './TabBarStyled';
import { ReactComponent as Home } from '../../../../assets/home.svg';
import { ReactComponent as Chatting } from '../../../../assets/chatting.svg';
import { ReactComponent as Person } from '../../../../assets/person.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export interface TabBarProps {
  curTab?: number;
}

const TabBar: React.FC<TabBarProps> = (props) => {
  const [curTab, setCurTab] = useState<number>(props.curTab || 0);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') setCurTab(1);
    if (location.pathname === '/chat') setCurTab(2);
    if (location.pathname === '/profile') setCurTab(3);
  }, [location.pathname]);
  const onClickPath = (urlNum: number) => () => {
    if (urlNum === 1) {
      navigate('/');
    }
    if (urlNum === 2) {
      navigate('/chat');
    }
    if (urlNum === 3) {
      navigate('/profile');
    }
  };
  return (
    <>
      <TabBarStyled curTab={curTab}>
        <div>
          <Home onClick={onClickPath(1)} width="22" height="22" />
          <br />홈
        </div>
        <div>
          <Chatting onClick={onClickPath(2)} width="22" height="22" />
          <br />
          채팅
        </div>
        <div>
          <Person onClick={onClickPath(3)} width="22" height="22" />
          <br />
          나의 당근
        </div>
      </TabBarStyled>
    </>
  );
};
export default TabBar;
