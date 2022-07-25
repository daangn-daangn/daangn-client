import { BuyHistoryPageStyled } from './BuyHistoryPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import usePurchaseHistoryLoad from 'hooks/queries/product/usePurchaseHistoryLoad';
import ErrorBoundary from 'components/ErrorBoundary';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import { ERROR_MSG } from 'constants/message';
import { useSetRecoilState } from 'recoil';
import { reviewUploadState } from 'stores/review';
import { useNavigate } from 'react-router-dom';

const BuyHistoryPage = () => {
  return (
    <>
      <BuyHistoryPageStyled>
        <Top title="구매내역" left="prev" />
        <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_BUY_HISTORY} />}>
          <BuyProductContainer />
        </ErrorBoundary>
      </BuyHistoryPageStyled>
    </>
  );
};

const BuyProductContainer = () => {
  const setReviewUpload = useSetRecoilState(reviewUploadState);
  const navigate = useNavigate();
  const { data: products } = usePurchaseHistoryLoad({
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {products?.map((product) => (
        <MyProductBox
          key={product.id}
          type="buy"
          product={product}
          stateSelects={
            !product.has_review
              ? [
                  {
                    content: '거래후기 남기기',
                    function: () => {
                      setReviewUpload({
                        type: 'buyer',
                        seller_id: product.seller_id,
                        product_id: product.id,
                      });
                      navigate('/review/give');
                    },
                  },
                ]
              : undefined
          }
        />
      ))}
    </>
  );
};
export default BuyHistoryPage;
