import DealBox from '@molecules/DealBox/DealBox';
import DetailTabBar from '@molecules/DetailTabBar/DetailTabBar';
import DetailBox, { DetailBoxProps } from '@organisms/DetailBox/DetailBox';
import { IProductWithUser } from 'interfaces/Product.interface';
import { IUser } from 'interfaces/User.interface';
import { ProductDetailPageStyled } from './ProductDetailPageStyled';
import { ProductState } from 'interfaces/Product.interface';
import useProductDetail from 'hooks/queries/product/useProductDetail';
import { useParams } from 'react-router-dom';
import Spinner from '@atoms/Spinner/Spinner';
import { PRODUCT_DEFAULT_IMAGE } from 'constants/defaultImages';

export const dummyUser: IUser = {
  id: 1,
  nickname: '유키링',
  profile_url:
    'https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg',
  location: '서울 강남',
  manner: 38.6,
};

export const dummyProduct: IProductWithUser = {
  id: 1,
  title: '아이폰 삽니다',
  category_id: 1,
  description: '원가 18,900갤럭시로 갈아타면서 판매해요~ 한번도 사용안한 새상품입니다',
  created_at: new Date(),
  view_count: 256,
  favorite_count: 21,
  chatting_count: 4,
  product_images: [
    'https://play-lh.googleusercontent.com/6Adeoocj4FktXRmkcFY8j6sknDBK_eoCjsMv6EPJI_ZLhLUeAmZH_r5QxKBBa8xoxgni',
    'https://img.pixers.pics/pho(s3:700/PI/23/28/700_PI2328_929d479296b1a4e351ad083979e06dca_5b7aba17b76ce_.,700,700,jpg)/shower-curtains-hello-kitty.jpg.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3he9XCrjKds0D-MuWkEmH9NEk3NjxMBqZTOgXwSBT4DZu2RX6-T-ZNFfEXtnIHnMuuCQ&usqp=CAU',
  ],
  location: '서울 강남',
  price: 6000,
  thumb_nail_image:
    'https://play-lh.googleusercontent.com/6Adeoocj4FktXRmkcFY8j6sknDBK_eoCjsMv6EPJI_ZLhLUeAmZH_r5QxKBBa8xoxgni',
  product_state: ProductState.FOR_SALE,
  seller: dummyUser,
  is_favorite: false,
};

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useProductDetail({ productId: Number(productId), refetchOnWindowFocus: false });
  console.log(product);
  if (!product) {
    return <Spinner />;
  }
  const detailBoxProps: DetailBoxProps = {
    slides: {
      product_images: product.product_images.length == 0 ? [PRODUCT_DEFAULT_IMAGE] : product.product_images,
    },
    productDetail: {
      id: product.id,
      category_id: product.category_id,
      chatting_count: product.chatting_count,
      created_at: product.created_at,
      description: product.description,
      favorite_count: product.favorite_count,
      title: product.title,
      view_count: product.view_count,
      product_state: product.product_state,
    },
    isMyProduct: product.id === product.seller.id,
    sellerId: product.seller.id,
  };
  return (
    <>
      <ProductDetailPageStyled>
        <DetailTabBar />
        <DetailBox {...detailBoxProps} />
        <DealBox
          isMyProduct={product.id === product.seller.id}
          isFavorite={product.is_favorite}
          productPrice={product.price}
          chatLength={product.chatting_count}
        />
      </ProductDetailPageStyled>
    </>
  );
};
export default ProductDetailPage;
