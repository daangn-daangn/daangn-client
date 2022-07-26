import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { ReviewPageStyled } from './ReviewPageStyled';
import Top from '@molecules/Top/Top';
import ReviewBox from '@molecules/ReviewBox/ReviewBox';
import NavStateBar from '@molecules/NavStateBar/NavStateBar';
import useReviewsLoad from 'hooks/queries/review/useReviewsLoad';
import { ERROR_MSG } from 'constants/message';
import useSellerReviewsLoad from 'hooks/queries/review/seller/ useSellerReviewsLoad';
import useBuyerReviewsLoad from 'hooks/queries/review/buyer/useBuyerReviewsLoad';
import ErrorBoundary from 'components/ErrorBoundary';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';

export type ReviewState = '전체후기' | '판매자 후기' | '구매자 후기';

const mode = {
  전체후기: {
    useReviewsLoad: useReviewsLoad,
  },
  '판매자 후기': {
    useReviewsLoad: useSellerReviewsLoad,
  },
  '구매자 후기': {
    useReviewsLoad: useBuyerReviewsLoad,
  },
};

const ReviewPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { ReviewState: ReviewState };
  const reviewState: ReviewState = state?.ReviewState || '전체후기';

  const { data, isFetchingNextPage, ref } = mode[reviewState].useReviewsLoad({
    userId: Number(userId),
    enabled: !!userId,
  });

  const navStates = [
    { menu: '전체후기', onClick: () => navigate('', { state: { ReviewState: '전체후기' } }) },
    { menu: '판매자 후기', onClick: () => navigate('', { state: { ReviewState: '판매자 후기' } }) },
    { menu: '구매자 후기', onClick: () => navigate('', { state: { ReviewState: '구매자 후기' } }) },
  ];

  return (
    <>
      <ReviewPageStyled>
        <div className="review-page-top">
          <Top title="거래 후기 상세" left="prev" leftClick={() => navigate(`/profile/${Number(userId)}`)} />
          <NavStateBar states={navStates} />
        </div>
        {/* 리뷰 없는 경우 나중에 추가 */}
        {reviewState === '전체후기' && (
          <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_REVIEW_ALL} />}>
            <>
              {data?.pages.map((page, index) => (
                <div key={index}>
                  <span className="review-count"> {page.data ? `후기 ${page.data.length}개` : '로딩중...'}</span>
                  {page.data.map((review) => (
                    <div key={review.id} className="reviews-wrap">
                      <ReviewBox reviewState={reviewState} review={review} />
                      {isFetchingNextPage ? '로딩중..' : <div ref={ref}></div>}
                    </div>
                  ))}
                </div>
              ))}
            </>
          </ErrorBoundary>
        )}
        {reviewState === '판매자 후기' && (
          <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_REVIEW_SELLER} />}>
            <>
              {data?.pages.map((page, index) => (
                <div key={index}>
                  <span className="review-count"> {page.data ? `후기 ${page.data.length}개` : '로딩중...'}</span>
                  {page.data.map((review) => (
                    <div key={review.id} className="reviews-wrap">
                      <ReviewBox reviewState={reviewState} review={review} />
                      {isFetchingNextPage ? '로딩중..' : <div ref={ref}></div>}
                    </div>
                  ))}
                </div>
              ))}
            </>
          </ErrorBoundary>
        )}
        {reviewState === '구매자 후기' && (
          <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_REVIEW_BUYER} />}>
            <>
              {data?.pages.map((page, index) => (
                <div key={index}>
                  <span className="review-count"> {page.data ? `후기 ${page.data.length}개` : '로딩중...'}</span>
                  {page.data.map((review) => (
                    <div key={review.id} className="reviews-wrap">
                      <ReviewBox reviewState={reviewState} review={review} />
                      {isFetchingNextPage ? '로딩중..' : <div ref={ref}></div>}
                    </div>
                  ))}
                </div>
              ))}
            </>
          </ErrorBoundary>
        )}
      </ReviewPageStyled>
    </>
  );
};

export default ReviewPage;
