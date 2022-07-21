import Button from '@atoms/Button/Button';
import Message from '@atoms/Message/Message';
import TextArea from '@atoms/TextArea/TextArea';
import Title from '@atoms/Title/Title';
import Top from '@molecules/Top/Top';
import useBuyerReviewUpload from 'hooks/queries/review/buyer/useBuyerReviewUpload';
import useSellerReviewUpload from 'hooks/queries/review/seller/useSellerReviewUpload';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reviewUploadState } from 'stores/review';
import { ReviewGivePageStyled } from './ReviewGivePageStyled';

interface IForm {
  content: string;
}

const ReviewGivePage = () => {
  const navigate = useNavigate();
  const reviewUpload = useRecoilValue(reviewUploadState);
  const buyerReviewMutation = useBuyerReviewUpload({
    onSuccess: () => {
      // 매너평가 페이지로?
    },
  });
  const sellerReviewMutation = useSellerReviewUpload({
    onSuccess: () => {
      // 매너평가 페이지로?
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    if (reviewUpload?.type === 'buyer') {
      buyerReviewMutation.mutate({
        product_id: reviewUpload.product_id,
        seller_id: reviewUpload.seller_id,
        content: data.content,
      });
    }
    if (reviewUpload?.type === 'seller') {
      sellerReviewMutation.mutate({
        product_id: reviewUpload.product_id,
        buyer_id: reviewUpload.buyer_id,
        content: data.content,
      });
    }
  };
  return (
    <ReviewGivePageStyled>
      <Top title="후기 남기기" left="prev" leftClick={() => navigate(-1)} />
      <div className="review-page-top">
        <Title fontWeigt="700" fontSize="22px">
          따뜻한 거래경험을 알려주세요!
        </Title>
        <span className="subtitle">남겨주신 거래후기는 상대방의 프로필에 공개돼요.</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          register={{
            ...register('content', {
              required: '후기를 남겨주세요!',
            }),
          }}
          placeholder="여기에 적어주세요"
          placeholder_color="#ffffff"
        />
        <Message message={errors?.content?.message} />
        <Button type="submit" height="50px" width="100%">
          후기 남기기
        </Button>
      </form>
    </ReviewGivePageStyled>
  );
};

export default ReviewGivePage;
