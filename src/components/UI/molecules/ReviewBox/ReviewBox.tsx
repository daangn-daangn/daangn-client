import { useState } from 'react';
import { ReviewBoxStyled } from './ReviewBoxStyled';
import Image from '@atoms/Image/Image';
import Time from '@atoms/Time/Time';
import { ReactComponent as More } from 'assets/more.svg';
import SelectModal from '@molecules/SelectModal/SelectModal';
import { IReview } from 'interfaces/Review.interface';
import { ReviewState } from 'pages/Profile/ReviewPage/ReviewPage';
import useBuyerReviewDelete from 'hooks/queries/review/buyer/useBuyerReviewDelete';
import useSellerReviewDelete from 'hooks/queries/review/seller/useSellerReviewDelete';

export interface ReviewBoxProps {
  review: IReview;
  reviewState?: ReviewState;
}

export const dummyReview: IReview = {
  id: 1,
  reviewer_id: 2,
  profile_url: 'https://sitem.ssgcdn.com/21/24/83/item/1000355832421_i1_1200.jpg',
  reviewer: '혜꾸르꾸르',
  content: '다음에 또 거래해요!',
  location: '부산광역시 남구 대연동',
  created_at: new Date(),
};

const ReviewBox = ({ review, reviewState }: ReviewBoxProps) => {
  const [showMoreModal, setShowMoreModal] = useState<boolean>(false);
  const deleteBuyerReviewMutation = useBuyerReviewDelete();
  const deleteSellerReviewMutation = useSellerReviewDelete();
  const reviewMoreSelect = [
    {
      content: '거래후기 삭제',
      function: () => {
        if (reviewState === '구매자 후기') {
          deleteBuyerReviewMutation.mutate({ buyerReviewId: review.id });
        }
        if (reviewState === '판매자 후기') {
          deleteSellerReviewMutation.mutate({ sellerReviewId: review.id });
        }
      },
    },
    { content: '취소', function: () => console.log('취소') },
  ];

  return (
    <>
      <ReviewBoxStyled>
        <Image imgUrl={review.profile_url} width="35px" height="35px" borderRedius="50%" />
        <div className="review_info">
          <p className="review_info__writer">{review.reviewer}</p>
          <div className="review_info__detail">
            <span className="review_info__detail-location">{review.location} &#183;</span>
            <Time time={review.created_at} />
          </div>
          <p>{review.content}</p>
        </div>
        {/* <div className="review_state">
          <More onClick={() => setShowMoreModal(true)} />
        </div> */}
      </ReviewBoxStyled>
      {showMoreModal && <SelectModal setModal={setShowMoreModal} selects={reviewMoreSelect} />}
    </>
  );
};

export default ReviewBox;
