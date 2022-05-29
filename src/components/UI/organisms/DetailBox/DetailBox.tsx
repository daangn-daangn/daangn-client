import Slider from '@molecules/Slider/Slider';
import SellerBox from '@molecules/SellerBox/SellerBox';
import DescriptionBox from '@molecules/DescriptionBox/DescriptionBox';
import { DetailBoxStyled } from './DetailBoxStyled';
import { IProduct } from 'interfaces/Product.interface';
import { IUser } from 'interfaces/User.interface';
import Button from '@atoms/Button/Button';

export interface DetailBoxProps {
  slides: Pick<IProduct, 'images'>;
  sellerDetail: Pick<IUser, 'nickname' | 'profileUrl' | 'location' | 'manner'>;
  productDetail: Pick<
    IProduct,
    'category' | 'chat' | 'created_at' | 'description' | 'favorite' | 'title' | 'view' | 'state'
  >;
}

const DetailBox = (props: DetailBoxProps) => {
  return (
    <>
      <DetailBoxStyled {...props}>
        <div className="slider-wrap">
          <Slider {...props} />
        </div>
        <div className="paddingWrapper">
          <SellerBox {...props} />
          <Button width="70px" height="30px" fontSize="0.9rem">
            {props.productDetail.state}
          </Button>
          <DescriptionBox {...props} />
        </div>
      </DetailBoxStyled>
    </>
  );
};
export default DetailBox;
