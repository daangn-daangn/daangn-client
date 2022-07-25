import { LikeListPageStyled } from './LikeListPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import { dummyProduct } from 'pages/Product/ProductDetailPage/ProductDetailPage';
import useProductsFavoriteLoad from 'hooks/queries/product/useProductsFavoriteLoad';
import Spinner from '@atoms/Spinner/Spinner';
import { ERROR_MSG } from 'constants/message';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import ErrorBoundary from 'components/ErrorBoundary';

const LikeListPage = () => {
  const { data: products } = useProductsFavoriteLoad({
    refetchOnWindowFocus: false,
  });
  if (!products) {
    return <Spinner />;
  }
  return (
    <>
      <LikeListPageStyled>
        <Top title="관심목록" left="prev" />
        <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_LIKE_PRODUCT} />}>
          {products.map((product) => (
            <MyProductBox key={product.id} type="like" product={product} />
          ))}
        </ErrorBoundary>
      </LikeListPageStyled>
    </>
  );
};
export default LikeListPage;
