import { LikeListPageStyled } from './LikeListPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import useProductsFavoriteLoad from 'hooks/queries/product/useProductsFavoriteLoad';
import { ERROR_MSG } from 'constants/message';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import ErrorBoundary from 'components/ErrorBoundary';
import useLogOut from 'hooks/common/useLogOut';

const LikeListPage = () => {
  useLogOut();
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
      {data?.pages.map((page, index) => (
        <div key={index}>
          {page.data.map((product) => (
            <MyProductBox key={product.id} type="like" product={product} />
          ))}
        </div>
      ))}
      {isFetchingNextPage ? '로딩중..' : <div ref={ref}></div>}
    </>
  );
};

export default LikeListPage;
