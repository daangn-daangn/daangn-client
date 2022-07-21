import { useNavigate, useLocation } from 'react-router-dom';
import { ReviewPageStyled } from './ReviewPageStyled';
import Top from '@molecules/Top/Top';
import ReviewBox, { dummyReview } from '@molecules/ReviewBox/ReviewBox';
import NavStateBar from '@molecules/NavStateBar/NavStateBar';
import useReviewsLoad from 'hooks/queries/review/useReviewsLoad';
import useMe from 'hooks/queries/user/useMe';
import useSellerReviewsLoad from 'hooks/queries/review/seller/ useSellerReviewsLoad';
import useBuyerReviewsLoad from 'hooks/queries/review/buyer/useBuyerReviewsLoad';

const ReviewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { ReviewState: string };
  const reviewState = state?.ReviewState || '전체후기';
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
        <span className="review-count"> 후기 1개</span>
        {reviewState === '전체후기' && (
          <div className="reviews-wrap">
            <ReviewBox review={dummyReview} />
          </div>
        )}
        {reviewState === '판매자 후기' && (
          <div className="reviews-wrap">
            <ReviewBox review={dummyReview} />
          </div>
        )}
        {reviewState === '구매자 후기' && (
          <div className="reviews-wrap">
            <ReviewBox review={dummyReview} />
          </div>
        )}
      </ReviewPageStyled>
    </>
  );
};
export default ReviewPage;
