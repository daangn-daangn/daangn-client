import Slider from '../../molecules/Slider/Slider';
import SellerBox from '../../molecules/SellerBox/SellerBox';
import DescriptionBox from '../../molecules/DescriptionBox/DescriptionBox';
import { IProduct } from '../../organisms/ProductBoxes/ProductBoxes';
import { DetailBoxStyled } from './DetailBoxStyled';

export interface ISeller {
  name: string;
  profileUrl: string;
  location: string;
  manner: number;
}

export interface DetailBoxProps {
  slideImages: string[];
  sellerDetail: Pick<ISeller, 'name' | 'profileUrl' | 'location' | 'manner'>;
  productDetail: Pick<IProduct, 'category' | 'chat' | 'created_at' | 'description' | 'favorite' | 'title' | 'view'>;
}

const DetailBox = (props : DetailBoxProps) => {
  return (
    <>
      <DetailBoxStyled {...props}>
        <Slider {...props} />
        <SellerBox {...props} />
        <DescriptionBox {...props} />
      </DetailBoxStyled>
    </>
  );
};
export default DetailBox;