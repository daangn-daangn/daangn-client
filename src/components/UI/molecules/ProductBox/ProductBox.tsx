import { IProduct, IProductLoad } from '../../../../interfaces/Product.interface';
import Image from '../../atoms/Image/Image';
import Like from '../../atoms/Like/Like';
import Price from '../../atoms/Price/Price';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { StyledProductBox } from './ProductBoxStyled';

export interface ProductBoxProps {
  product: IProductLoad;
}

const ProductBox = ({ product }: ProductBoxProps) => {
  return (
    <>
      <StyledProductBox>
        <Image
          imgUrl={
            product.thumb_nail_image ||
            'https://file.mk.co.kr/meet/neds/2020/07/image_readtop_2020_786275_15961837924301453.jpg'
          }
        />
        <div className="product_info">
          <Title>{product.title}</Title>
          <div className="product_info__detail">
            <span className="product_info__detail-location">{product.location} &#183;</span>
            <Time time={product.created_at} />
          </div>
          <Price productPrice={product.price} />
        </div>
        <div className="product_state">
          <Like isFavorite={true} count={product.favorite_count} />
        </div>
      </StyledProductBox>
    </>
  );
};

export default ProductBox;
