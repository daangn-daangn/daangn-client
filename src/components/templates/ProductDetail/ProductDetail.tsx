import DetailTabBar from '../../UI/molecules/DetailTabBar/DetailTabBar';
import DetailBox from '../../UI/organisms/DetailBox/DetailBox';
import DealBox from '../../UI/molecules/DealBox/DealBox';
import { ISeller } from '../../UI/organisms/DetailBox/DetailBox';
import { ProductDetailStyled } from './ProductDetailStyled';
import { IProduct } from '../../../interfaces/Product.interface';

export interface ProductDetailProps {
  slides: Pick<IProduct, 'images'>;
  sellerDetail: Pick<ISeller, 'name' | 'profileUrl' | 'location' | 'manner'>;
  productDetail: Pick<IProduct, 'category' | 'chat' | 'created_at' | 'description' | 'favorite' | 'title' | 'view'>;
  isLike: true;
  productPrice: 6000;
}

const ProductDetail = (props: ProductDetailProps) => {
  return (
    <>
      <ProductDetailStyled {...props}>
        <DetailTabBar />
        <DetailBox {...props} />
        <DealBox {...props} />
      </ProductDetailStyled>
    </>
  );
};
export default ProductDetail;
