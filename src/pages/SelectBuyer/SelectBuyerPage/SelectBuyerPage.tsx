import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/CheckBox';
import Title from '@atoms/Title/Title';
import Top from '@molecules/Top/Top';
import useChatRoomUsersLoad from 'hooks/queries/chat/useChatRoomUsersLoad';
import useProductEditState from 'hooks/queries/product/useProductEditState';
import { ProductState } from 'interfaces/Product.interface';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { StyledSelectBuyerPage, UserList } from './SelectBuyerPageStyled';
import { reviewUploadState } from 'stores/review';
import ErrorBoundary from 'components/ErrorBoundary';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import { ERROR_MSG } from 'constants/message';
import useLogOut from 'hooks/common/useLogOut';

const SelectBuyerPage = () => {
  const navigate = useNavigate();
  const [reviewUpload, setReviewUpload] = useRecoilState(reviewUploadState);
  const [selectUser, setSelectUser] = useState<number>(-1);
  const { productId } = useParams<{ productId: string }>();
  const { data: users } = useChatRoomUsersLoad({ productId: Number(productId), refetchOnWindowFocus: false });
  useLogOut();
  const onClickUser = (id: number) => {
    setSelectUser(id);
    setReviewUpload({
      type: 'seller',
      product_id: Number(productId),
      buyer_id: id,
    });
  };

  const mutation = useProductEditState({
    onSuccess: () => {
      navigate('/review/give');
    },
  });
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
      <Button
        onClick={() =>
          mutation.mutate({ productId: Number(productId), productState: ProductState.SOLD_OUT, buyer_id: selectUser })
        }
        disabled={selectUser === -1}
      >
        선택 완료
      </Button>
    </StyledSelectBuyerPage>
  );
};

export default SelectBuyerPage;
