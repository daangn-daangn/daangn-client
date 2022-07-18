import PostButton from '@atoms/PostButton/PostButton';
import Spinner from '@atoms/Spinner/Spinner';
import NavBar from '@organisms/NavBar/NavBar';
import ProductBoxes from '@organisms/ProductBoxes/ProductBoxes';
import TabBar from '@organisms/TabBar/TabBar';
import useProductsLoad from 'hooks/queries/product/useProductsLoad';
import { useRecoilValue } from 'recoil';
import { craeteSearchParamsState } from 'stores/Home';
import { IProduct } from '../../../interfaces/Product.interface';
import { StyledHome } from './HomePageStyled';

export const dummyProduct: Pick<
  IProduct,
  'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'favorite_count'
> = {
  id: 1,
  title: '아이폰 팔아요',
  thumb_nail_image:
    'https://dnvefa72aowie.cloudfront.net/origin/article/202201/300ec7e016841850b703e391d7b276f9198c54e7075a32df5a80b6fdd8563a6b.webp?q=82&s=300x300&t=crop',
  location: '대연동',
  created_at: new Date(),
  price: 300000,
  favorite_count: 5,
};

export const dummyProducts: Pick<
  IProduct,
  'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'favorite_count'
>[] = Array(10)
  .fill(dummyProduct)
  .map((dummyProduct, index) => {
    const indexDummyProduct = { ...dummyProduct };
    indexDummyProduct.id = index + 1;
    return indexDummyProduct;
  });

const HomePage = () => {
  const craeteSearchParams = useRecoilValue(craeteSearchParamsState);
  console.log(craeteSearchParams);
  const { data: products, isLoading } = useProductsLoad();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <StyledHome>
      <NavBar type="홈" location="대연동" />
      <div className="productWrapper">{products && <ProductBoxes products={products} />}</div>
      <TabBar />
      <PostButton />
    </StyledHome>
  );
};

export default HomePage;
