import { IProduct } from '../../../../interfaces/Product.interface';
import Image from '../../atoms/Image/Image';
import Like from '../../atoms/Like/Like';
import Price from '../../atoms/Price/Price';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { StyledProductBox } from './ProductBoxStyled';

export interface ProductBoxProps {
  product: Pick<IProduct, 'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'likes'>;
}

const ProductBox = ({ product }: ProductBoxProps) => {
  return (
    <>
      <StyledProductBox>
        <Image imgUrl={product.thumb_nail_image} />
        <div className="product_info">
          <Title>{product.title}</Title>
          <div className="product_info__detail">
            <span className="product_info__detail-location">{product.location} &#183;</span>
            <Time time={product.created_at} />
          </div>
          <Price productPrice={product.price} />
        </div>
        <div className="product_state">
          <Like isLike={true} count={product.likes.length} />
        </div>
      </StyledProductBox>
    </>
  );
};

export default ProductBox;
