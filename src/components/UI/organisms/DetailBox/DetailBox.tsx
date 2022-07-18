import Slider from '@molecules/Slider/Slider';
import SellerBox from '@molecules/SellerBox/SellerBox';
import DescriptionBox from '@molecules/DescriptionBox/DescriptionBox';
import { DetailBoxStyled } from './DetailBoxStyled';
import { IProduct } from 'interfaces/Product.interface';
import { IUser } from 'interfaces/User.interface';
import Button from '@atoms/Button/Button';
import ProductStateChangeButton from '@organisms/ProductStateChangeButton/ProductStateChangeButton';

export interface DetailBoxProps {
  slides: Pick<IProduct, 'product_images'>;
  productDetail: Pick<
    IProduct,
    | 'id'
    | 'category_id'
    | 'chatting_count'
    | 'created_at'
    | 'description'
    | 'favorite_count'
    | 'title'
    | 'view_count'
    | 'product_state'
  >;
  isMyProduct: boolean;
  sellerId: number;
}

const DetailBox = (props: DetailBoxProps) => {
  return (
    <>
      <DetailBoxStyled {...props}>
        <div className="slider-wrap">
          <Slider {...props} height="400px" />
        </div>
        <div className="paddingWrapper">
          <SellerBox sellerId={props.sellerId} />
          {props.isMyProduct && (
            <div className="detailbox_stateBtn">
              <ProductStateChangeButton
                productId={props.productDetail.id}
                productState={props.productDetail.product_state}
              />
            </div>
          )}
          <DescriptionBox {...props} />
        </div>
      </DetailBoxStyled>
    </>
  );
};
export default DetailBox;
