import PostButton from '@atoms/PostButton/PostButton';
import NavBar from '@organisms/NavBar/NavBar';
import ProductBoxes from '@organisms/ProductBoxes/ProductBoxes';
import TabBar from '@organisms/TabBar/TabBar';
import { IProduct } from '../../../interfaces/Product.interface';
import Applayout from '../../../Layouts/AppLayout';
import { StyledHome } from './HomePageStyled';

export const dummyProduct: Pick<
  IProduct,
  'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'likes'
> = {
  id: 1,
  title: '아이폰 팔아요',
  thumb_nail_image:
    'https://dnvefa72aowie.cloudfront.net/origin/article/202201/300ec7e016841850b703e391d7b276f9198c54e7075a32df5a80b6fdd8563a6b.webp?q=82&s=300x300&t=crop',
  location: '대연동',
  created_at: new Date(),
  price: 300000,
  likes: [1, 2, 3, 4, 5],
};

export const dummyProducts: Pick<
  IProduct,
  'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'likes'
>[] = Array(10)
  .fill(dummyProduct)
  .map((dummyProduct, index) => {
    const indexDummyProduct = { ...dummyProduct };
    indexDummyProduct.id = index + 1;
    return indexDummyProduct;
  });

const HomePage = () => {
  console.log(dummyProducts);
  return (
    <StyledHome>
      <NavBar type="홈" location="대연동" />
      <div className="productWrapper">
        <ProductBoxes products={dummyProducts} />
      </div>
      <TabBar curTab={1} />
      <PostButton />
    </StyledHome>
  );
};

export default HomePage;
