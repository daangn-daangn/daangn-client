import Slider from '../../molecules/Slider/Slider';
import SellerBox from '../../molecules/SellerBox/SellerBox';
import DescriptionBox from '../../molecules/DescriptionBox/DescriptionBox';
import { DetailBoxStyled } from './DetailBoxStyled';
import { IProduct } from '../../../../interfaces/Product.interface';

export interface ISeller {
  name: string;
  profileUrl: string;
  location: string;
  manner: number;
}

export interface DetailBoxProps {
  slides: Pick<IProduct, 'images'>;
  sellerDetail: Pick<ISeller, 'name' | 'profileUrl' | 'location' | 'manner'>;
  productDetail: Pick<IProduct, 'category' | 'chat' | 'created_at' | 'description' | 'favorite' | 'title' | 'view'>;
}

const DetailBox = (props: DetailBoxProps) => {
  return (
    <>
      <DetailBoxStyled {...props}>
        <div className="slider-wrap">
          <Slider {...props} />
        </div>
        <SellerBox {...props} />
        <DescriptionBox {...props} />
      </DetailBoxStyled>
    </>
  );
};
export default DetailBox;
