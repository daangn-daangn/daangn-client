import Slider from '@molecules/Slider/Slider';
import SellerBox from '@molecules/SellerBox/SellerBox';
import DescriptionBox from '@molecules/DescriptionBox/DescriptionBox';
import { DetailBoxStyled } from './DetailBoxStyled';
import { IProduct } from 'interfaces/Product.interface';
import { IUser } from 'interfaces/User.interface';
import Button from '@atoms/Button/Button';
import ProductStateChangeButton from '@organisms/ProductStateChangeButton/ProductStateChangeButton';

export interface DetailBoxProps {
  slides: Pick<IProduct, 'images'>;
  sellerDetail: Pick<IUser, 'nickname' | 'profileUrl' | 'location' | 'manner'>;
  productDetail: Pick<
    IProduct,
    'category' | 'chat' | 'created_at' | 'description' | 'favorite' | 'title' | 'view' | 'state'
  >;
  isMyProduct: boolean;
}

const DetailBox = (props: DetailBoxProps) => {
  return (
    <>
      <DetailBoxStyled {...props}>
        <div className="slider-wrap">
          <Slider {...props} height="400px" />
        </div>
        <div className="paddingWrapper">
          <SellerBox {...props} />
          {props.isMyProduct && (
            <div className="detailbox_stateBtn">
              <ProductStateChangeButton productState={props.productDetail.state} />
            </div>
          )}
          <DescriptionBox {...props} />
        </div>
      </DetailBoxStyled>
    </>
  );
};
export default DetailBox;
