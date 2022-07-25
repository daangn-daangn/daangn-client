import { LikeListPageStyled } from './LikeListPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import useProductsFavoriteLoad from 'hooks/queries/product/useProductsFavoriteLoad';
import { ERROR_MSG } from 'constants/message';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import ErrorBoundary from 'components/ErrorBoundary';

const LikeListPage = () => {
  return (
    <>
      <LikeListPageStyled>
        <Top title="관심목록" left="prev" />
        <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_LIKE_PRODUCT} />}>
          <LikeProductContainer />
        </ErrorBoundary>
      </LikeListPageStyled>
    </>
  );
};

const LikeProductContainer = () => {
  const { data, isFetchingNextPage, ref } = useProductsFavoriteLoad();
  return (
    <>
      {/* {products?.map((product) => (
        <MyProductBox key={product.id} type="like" product={product} />
      ))} */}
      {data?.pages.map((page, index) => (
        <>
          {page.data.map((product) => (
            <MyProductBox key={product.id} type="like" product={product} />
          ))}
        </>
      ))}
      {isFetchingNextPage ? '로딩중..' : <div ref={ref}></div>}
    </>
  );
};

export default LikeListPage;
