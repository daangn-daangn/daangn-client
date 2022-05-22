import Button from '@atoms/Button/Button';
import Image from '@atoms/Image/Image';
import Price from '@atoms/Price/Price';
import Title from '@atoms/Title/Title';
import { IProduct } from 'interfaces/Product.interface';
import { ProductInfoBoxStyled } from './ProductInfoBoxStyled';

export interface ProductInfoBoxProps {
  product: Pick<IProduct, 'id' | 'title' | 'state' | 'thumb_nail_image' | 'price'>;
}

const ProductInfoBox = ({ product }: ProductInfoBoxProps) => {
  return (
    <>
      <ProductInfoBoxStyled>
        <div className="messageProduct_info">
          <Image imgUrl={product.thumb_nail_image} width="40px" height="40px" />
          <div className="messageProduct_info-detail">
            <div>
              <span className="messageProduct_info-state">{product.state}</span>
              <Title fontSize="0.9rem">{product.title}</Title>
            </div>
            <Price productPrice={product.price} />
          </div>
        </div>
      </ProductInfoBoxStyled>
    </>
  );
};

export default ProductInfoBox;
