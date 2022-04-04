import { ChatTabBarStyled } from './ChatTabBarStyled';
import { IUser } from 'interfaces/User.interface';
import Temperature from '@atoms/Temperature/Temperature';
import { ReactComponent as Back } from 'assets/back.svg';
import { ReactComponent as Hamburger } from 'assets/hamburger.svg';

export interface ChatTabBarProps {
  userDetail: Pick<IUser, 'nickname' | 'manner'>;
}

const ChatTabBar = ({ userDetail }: ChatTabBarProps) => {
  return (
    <>
      <ChatTabBarStyled {...userDetail}>
        <Back width='18' height='18' />
        <div className='user-detail'>
          <span>{userDetail.nickname}</span>
          <Temperature type="chat" degree={userDetail.manner}/>
        </div>
        <Hamburger width='18' height='18' />
      </ChatTabBarStyled>
    </>
  );
};

export default ChatTabBar;
