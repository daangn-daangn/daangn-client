import Image from '@atoms/Image/Image';
import Price from '@atoms/Price/Price';
import Title from '@atoms/Title/Title';
import { PRODUCT_DEFAULT_IMAGE } from 'constants/defaultImages';
import { IChatRoomDetail } from 'interfaces/Chat.interface';
import { ProductInfoBoxStyled } from './ProductInfoBoxStyled';

export interface ProductInfoBoxProps {
  product: Pick<IChatRoomDetail, 'product_image' | 'product_title' | 'product_state' | 'product_price'>;
}

const ProductInfoBox = ({ product }: ProductInfoBoxProps) => {
  return (
    <>
      <ProductInfoBoxStyled>
        <div className="messageProduct_info">
          <Image imgUrl={product.product_image || PRODUCT_DEFAULT_IMAGE} width="40px" height="40px" />
          <div className="messageProduct_info-detail">
            <div>
              <span className="messageProduct_info-state">{product.product_state}</span>
              <Title fontSize="0.9rem">{product.product_title}</Title>
            </div>
            <Price productPrice={product.product_price} />
          </div>
        </div>
      </ProductInfoBoxStyled>
    </>
  );
};

export default ProductInfoBox;
