import { BuyHistoryPageStyled } from './BuyHistoryPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import usePurchaseHistoryLoad from 'hooks/queries/product/usePurchaseHistoryLoad';
import Spinner from '@atoms/Spinner/Spinner';
import ErrorBoundary from 'components/ErrorBoundary';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import { ERROR_MSG } from 'constants/message';

const MyProductBoxSelects = {
  후기안씀: {
    stateSelects: [{ content: '거래후기 남기기', function: () => console.log('거래후기 남기기') }],
    moreSelects: [{ content: '삭제', function: () => console.log('삭제') }],
  },
  후기씀: {
    stateSelects: [{ content: '작성한 후기 보기', function: () => console.log('작성한 후기 보기') }],
    moreSelects: [
      { content: '후기 수정', function: () => console.log('후기 수정') },
      { content: '삭제', function: () => console.log('삭제') },
    ],
  },
};

const BuyHistoryPage = () => {
  const { data: products } = usePurchaseHistoryLoad({
    refetchOnWindowFocus: false,
  });
  if (!products) {
    return <Spinner />;
  }
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
            !product.has_review ? MyProductBoxSelects.후기안씀.stateSelects : MyProductBoxSelects.후기씀.stateSelects
          }
          moreSelects={
            !product.has_review ? MyProductBoxSelects.후기안씀.moreSelects : MyProductBoxSelects.후기씀.moreSelects
          }
        />
      ))}
    </>
  );
};
export default BuyHistoryPage;
