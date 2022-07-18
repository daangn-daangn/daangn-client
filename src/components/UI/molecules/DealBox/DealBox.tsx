import Button from '../../atoms/Button/Button';
import Like from '../../atoms/Like/Like';
import Price from '../../atoms/Price/Price';
import { StyledDealBox } from './DealBoxStyled';

export interface DealBoxProps {
  isFavorite: boolean;
  productPrice: number;
  isMyProduct: boolean;
  chatLength: number;
}

const DealBox = ({ isFavorite, productPrice, isMyProduct, chatLength }: DealBoxProps) => {
  const onClickLike = () => {
    // 좋아요 Update API 요청
  };
  const onClickChat = () => {
    // 채팅방 Create API 요청
  };
  const onClickMyProductChat = () => {
    // 내 상품 채팅방 보기 API 요청
  };

  return (
    <StyledDealBox>
      <Like onClick={onClickLike} width="18px" height="18px" isFavorite={isFavorite} />
      <div className="line"></div>
      <div className="dealBox_priceWrapper">
        <Price productPrice={productPrice} />
      </div>
      {isMyProduct ? (
        <Button onClick={onClickMyProductChat}>채팅 목록 보기 ({chatLength})</Button>
      ) : (
        <Button onClick={onClickChat}>채팅으로 거래하기</Button>
      )}
    </StyledDealBox>
  );
};

export default DealBox;
