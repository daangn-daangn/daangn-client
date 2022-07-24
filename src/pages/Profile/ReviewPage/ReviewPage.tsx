import { useNavigate, useLocation } from 'react-router-dom';
import { ReviewPageStyled } from './ReviewPageStyled';
import Top from '@molecules/Top/Top';
import ReviewBox, { dummyReview } from '@molecules/ReviewBox/ReviewBox';
import NavStateBar from '@molecules/NavStateBar/NavStateBar';
import useReviewsLoad from 'hooks/queries/review/useReviewsLoad';
import useMe from 'hooks/queries/user/useMe';
import useSellerReviewsLoad from 'hooks/queries/review/seller/ useSellerReviewsLoad';
import useBuyerReviewsLoad from 'hooks/queries/review/buyer/useBuyerReviewsLoad';

export type ReviewState = '전체후기' | '판매자 후기' | '구매자 후기';

const ReviewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { ReviewState: ReviewState };
  const reviewState: ReviewState = state?.ReviewState || '전체후기';
  const { data: me } = useMe({ refetchOnWindowFocus: false });
  const { data: allReviews } = useReviewsLoad({
    userId: me?.id as number,
    enabled: reviewState === '전체후기' && !!me,
  });
  const { data: sellerReviews } = useSellerReviewsLoad({
    userId: me?.id as number,
    enabled: reviewState === '판매자 후기' && !!me,
  });

  const { data: buyerReviews } = useBuyerReviewsLoad({
    userId: me?.id as number,
    enabled: reviewState === '구매자 후기' && !!me,
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
          <Top title="거래 후기 상세" left="prev" leftClick={() => navigate('/profile')} />
          <NavStateBar states={navStates} />
        </div>
        {/* 리뷰 없는 경우 나중에 추가 */}
        {reviewState === '전체후기' && (
          <>
            <span className="review-count"> {allReviews ? `후기 ${allReviews.length}개` : '로딩중...'}</span>
            {allReviews?.map((review) => (
              <div key={review.id} className="reviews-wrap">
                <ReviewBox reviewState={reviewState} review={review} />
              </div>
            ))}
          </>
        )}
        {reviewState === '판매자 후기' && (
          <>
            <span className="review-count"> {sellerReviews ? `후기 ${sellerReviews.length}개` : '로딩중...'}</span>
            {sellerReviews?.map((review) => (
              <div key={review.id} className="reviews-wrap">
                <ReviewBox reviewState={reviewState} review={review} />
              </div>
            ))}
          </>
        )}
        {reviewState === '구매자 후기' && (
          <>
            <span className="review-count"> {buyerReviews ? `후기 ${buyerReviews.length}개` : '로딩중...'}</span>
            {buyerReviews?.map((review) => (
              <div key={review.id} className="reviews-wrap">
                <ReviewBox reviewState={reviewState} review={review} />
              </div>
            ))}
          </>
        )}
      </ReviewPageStyled>
    </>
  );
};
export default ReviewPage;
