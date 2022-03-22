import { StyledPrice } from './PriceStyled';

export interface PriceProps {
  productPrice: number;
}

const Price = ({ productPrice }: PriceProps) => {
  return (
    <>
      <StyledPrice>{productPrice.toLocaleString('ko-KR')}원</StyledPrice>
    </>
  );
};

export default Price;
