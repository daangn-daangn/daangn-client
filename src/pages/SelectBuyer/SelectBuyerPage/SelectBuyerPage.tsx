import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/CheckBox';
import Title from '@atoms/Title/Title';
import Top from '@molecules/Top/Top';
import useChatRoomUsersLoad from 'hooks/queries/chat/useChatRoomUsersLoad';
import { IChatRoomUser } from 'interfaces/Chat.interface';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { StyledSelectBuyerPage, UserList } from './SelectBuyerPageStyled';

const dummyData: IChatRoomUser[] = [
  {
    id: 1,
    name: '이이이',
  },
  {
    id: 2,
    name: '이재훈',
  },
  {
    id: 3,
    name: '재재재',
  },
  {
    id: 4,
    name: '훈훈',
  },
  {
    id: 5,
    name: '히히',
  },
];

const SelectBuyerPage = () => {
  const navigate = useNavigate();
  const [selectUser, setSelectUser] = useState<number>(-1);
  const { productId } = useParams<{ productId: string }>();
  const { data: users } = useChatRoomUsersLoad({ productId: Number(productId), refetchOnWindowFocus: false });
  const onClickUser = (id: number) => {
    setSelectUser(id);
  };
  return (
    <StyledSelectBuyerPage>
      <Top title="구매자 선택" left="prev" leftClick={() => navigate(-1)} />
      <UserList>
        <Title fontWeigt="700">최근 채팅 목록에서 구매자 찾기</Title>
        <ul className="buyer_list">
          {users?.map((user) => (
            <li key={user.id} onClick={() => onClickUser(user.id)}>
              <CheckBox text={`닉네임 - ${user.name}`} isCheck={selectUser == user.id} />
            </li>
          ))}
        </ul>
      </UserList>
      <Button disabled={selectUser === -1}>선택 완료</Button>
    </StyledSelectBuyerPage>
  );
};

export default SelectBuyerPage;
