import Image from '../../atoms/Image/Image';
import Like from '../../atoms/Like/Like';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { IProduct } from '../../organisms/ProductBoxes/ProductBoxes';
import { StyledProductBox } from './ProductBoxStyled';

export interface ProductBoxProps {
  product: Pick<IProduct, 'id' | 'imgUrl' | 'title' | 'location' | 'created_at' | 'price' | 'likes'>;
}

const ProductBox = ({ product }: ProductBoxProps) => {
  return (
    <>
      <StyledProductBox>
        <Image imgUrl={product.imgUrl} />
        <div className="product_info">
          <Title>{product.title}</Title>
          <div className="product_info__detail">
            <span className="product_info__detail-location">{product.location} &#183;</span>
            <Time time={product.created_at} />
          </div>
          <span className="product_info__price">{product.price.toLocaleString('ko-KR')}원</span>
        </div>
        <div className="product_state">
          <Like count={product.likes.length} />
        </div>
      </StyledProductBox>
    </>
  );
};

export default ProductBox;
