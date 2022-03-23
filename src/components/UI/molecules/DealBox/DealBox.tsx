import Button from '../../atoms/Button/Button';
import Like from '../../atoms/Like/Like';
import Price from '../../atoms/Price/Price';
import { StyledDealBox } from './DealBoxStyled';

export interface DealBoxProps {
  isLike: boolean;
  productPrice: number;
}

const DealBox = ({ isLike, productPrice }: DealBoxProps) => {
  const onClickLike = () => {
    // 좋아요 Update API 요청
  };
  const onClickChat = () => {
    // 채팅방 Create API 요청
  };
  return (
    <StyledDealBox>
      <Like onClick={onClickLike} width="18px" height="18px" isLike={isLike} />
      <div className="line"></div>
      <div className="dealBox_priceWrapper">
        <Price productPrice={productPrice} />
      </div>
      <Button onClick={onClickChat}>채팅으로 거래하기</Button>
    </StyledDealBox>
  );
};

export default DealBox;
