import { useState, useEffect } from 'react';
import { NavStateBarStyled } from './NavStateBarStyled';

export interface NavStateBarProps {
  states?: { menu: string; onClick: () => void }[];
}

const NavStateBar = (props: NavStateBarProps) => {
  const [menuFocus, setMenuFocus] = useState<number>(0);

  return (
    <>
      <NavStateBarStyled {...props}>
        {props.states?.map((state, idx) => (
          <div
            key={idx}
            className="state"
            onClick={() => {
              setMenuFocus(idx);
              state.onClick();
            }}
            style={{
              color: `${menuFocus === idx ? 'black' : '#898989'}`,
              borderBottom: `${menuFocus === idx ? '2px solid black' : '1px solid #e9e9e9'}`,
            }}
          >
            {state.menu}
          </div>
        ))}
      </NavStateBarStyled>
    </>
  );
};

export default NavStateBar;
