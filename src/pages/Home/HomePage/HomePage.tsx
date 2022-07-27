import PostButton from '@atoms/PostButton/PostButton';
import Spinner from '@atoms/Spinner/Spinner';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import NavBar from '@organisms/NavBar/NavBar';
import ProductBoxes from '@organisms/ProductBoxes/ProductBoxes';
import TabBar from '@organisms/TabBar/TabBar';
import { getProdcts, GetProdctsParams } from 'apis/product/api';
import ErrorBoundary from 'components/ErrorBoundary';
import { ERROR_MSG } from 'constants/message';
import useProductsLoad from 'hooks/queries/product/useProductsLoad';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { IProductLoad } from '../../../interfaces/Product.interface';
import { StyledHome } from './HomePageStyled';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import QUERY_KEYS from 'constants/queryKeys';
import useLogOut from 'hooks/common/useLogOut';
import useMe from 'hooks/queries/user/useMe';

export const dummyProduct: IProductLoad = {
  id: 1,
  title: '아이폰 팔아요',
  thumb_nail_image:
    'https://dnvefa72aowie.cloudfront.net/origin/article/202201/300ec7e016841850b703e391d7b276f9198c54e7075a32df5a80b6fdd8563a6b.webp?q=82&s=300x300&t=crop',
  location: '대연동',
  created_at: new Date(),
  price: 300000,
  favorite_count: 5,
  chatting_count: 0,
  has_review: false,
};

export const dummyProducts: IProductLoad[] = Array(10)
  .fill(dummyProduct)
  .map((dummyProduct, index) => {
    const indexDummyProduct = { ...dummyProduct };
    indexDummyProduct.id = index + 1;
    return indexDummyProduct;
  });

const HomePage = () => {
  const { data: me } = useMe();
  useLogOut();
  return (
    <StyledHome>
      <NavBar type="홈" location={me?.location} />
      <div className="productWrapper">
        <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_DATA} />}>
          <ProductContainer />
        </ErrorBoundary>
      </div>
      <TabBar />
      <PostButton />
    </StyledHome>
  );
};

const ProductContainer = () => {
  const { data, isFetchingNextPage, ref } = useProductsLoad();
  return (
    <>
      {data?.pages.map((page, index) => (
        <div key={index}>
          <ProductBoxes products={page.data} />
          {isFetchingNextPage ? '로딩중..' : <div ref={ref}></div>}
        </div>
      ))}
    </>
  );
};

export default HomePage;
