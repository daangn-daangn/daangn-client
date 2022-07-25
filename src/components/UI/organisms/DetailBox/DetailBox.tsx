import Slider from '@molecules/Slider/Slider';
import SellerBox from '@molecules/SellerBox/SellerBox';
import DescriptionBox from '@molecules/DescriptionBox/DescriptionBox';
import { DetailBoxStyled } from './DetailBoxStyled';
import { IProduct } from 'interfaces/Product.interface';
import ProductStateChangeButton from '@organisms/ProductStateChangeButton/ProductStateChangeButton';
import { Link } from 'react-router-dom';

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
          <Link to={`/profile/${props.sellerId}`}>
            <SellerBox sellerId={props.sellerId} />
          </Link>
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
