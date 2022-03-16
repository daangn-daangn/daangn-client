import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { TabBarStyled } from './TabBarStyled';
import { ReactComponent as Home } from '../../../../assets/home.svg';
import { ReactComponent as Chatting } from '../../../../assets/chatting.svg';
import { ReactComponent as Person } from '../../../../assets/person.svg';

export interface TabBarProps {
  curTab?: number;
}

const TabBar: React.FC<TabBarProps> = (props) => {
  const [curTab, setCurTab] = useState<number>(props.curTab || 0);
  /*
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/home') setCurTab(1);
    if (location.pathname === '/chatting') setCurTab(2);
    if (location.pathname === '/profile') setCurTab(3);
  }, [location.pathname])
  */
  return (
    <>
      <TabBarStyled curTab={curTab}>
        <div>
          <Home width='22' height='22' /><br/>홈
        </div>
        <div>
          <Chatting width='22' height='22' /><br/>채팅
        </div>
        <div>
          <Person width='22' height='22' /><br/>나의 당근
        </div>
      </TabBarStyled>
    </>
  );
};
export default TabBar;