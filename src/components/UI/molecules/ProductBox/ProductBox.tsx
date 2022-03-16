import Image from '../../atoms/Image/Image';
import Like from '../../atoms/Like/Like';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { StyledProductBox } from './ProductBoxStyled';

const dummyImageUrl =
  'https://dnvefa72aowie.cloudfront.net/origin/article/202201/300ec7e016841850b703e391d7b276f9198c54e7075a32df5a80b6fdd8563a6b.webp?q=82&s=300x300&t=crop';

export interface ProductBoxProps {}

const ProductBox = () => {
  return (
    <>
      <StyledProductBox>
        <Image imgUrl={dummyImageUrl} />
        <div className="product_info">
          <Title>아이폰 팔아요</Title>
          <div className="product_info__detail">
            <span className="product_info__detail-location">대연동 &#183;</span>
            <Time time={new Date()} />
          </div>
          <span className="product_info__price">300,000원</span>
        </div>
        <div className="product_state">
          <Like count={12} />
        </div>
      </StyledProductBox>
    </>
  );
};

export default ProductBox;
