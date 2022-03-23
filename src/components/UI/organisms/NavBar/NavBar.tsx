import { NavBarStyled } from './NavBarStyled';
import { ReactComponent as Alarm } from '../../../../assets/alarm.svg';
import { ReactComponent as Hamburger } from '../../../../assets/hamburger.svg';
import { ReactComponent as Search } from '../../../../assets/search.svg';
import { ReactComponent as Setting } from '../../../../assets/setting.svg';

type NavBarType = '홈' | '채팅' | '나의 당근';

export interface NavBarProps {
  type?: NavBarType;
  location?: string;
}

const NavBar = (props : NavBarProps) => {
  return (
    <>
      <NavBarStyled {...props}>
        <p className='current-tab'>
          {props.type === '홈' ? props.location : props.type}
        </p>
        <div className='icons'>
          {props.type === '홈' ? 
          <>
            <Search />
            <Hamburger />
            <Alarm />
          </>
          :props.type === '채팅' ?
            <Alarm />
          :
            <Setting />
          }

        </div>
      </NavBarStyled>
    </>
  );
};
export default NavBar;