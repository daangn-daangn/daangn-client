import { BuyHistoryPageStyled } from './BuyHistoryPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import { dummyProduct } from 'pages/Product/ProductDetailPage/ProductDetailPage';
import usePurchaseHistoryLoad from 'hooks/queries/product/usePurchaseHistoryLoad';
import Spinner from '@atoms/Spinner/Spinner';
import { PRODUCT_DEFAULT_IMAGE } from 'constants/defaultImages';

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
        {/* <MyProductBox
          type="sell"
          product={dummyProduct}
          stateSelects={MyProductBoxSelects.후기씀.stateSelects}
          moreSelects={MyProductBoxSelects.후기씀.moreSelects}
        />
        <MyProductBox
          type="sell"
          product={dummyProduct}
          stateSelects={MyProductBoxSelects.후기안씀.stateSelects}
          moreSelects={MyProductBoxSelects.후기안씀.moreSelects}
        /> */}
        {products.map((product) => (
          <MyProductBox
            key={product.id}
            type="sell"
            product={{
              id: product.id,
              thumb_nail_image: product.thumb_nail_image || PRODUCT_DEFAULT_IMAGE,
              title: product.title,
              location: product.location,
              created_at: product.created_at,
              price: product.price,
              favorite_count: product.favorite_count,
            }}
            stateSelects={MyProductBoxSelects.후기안씀.stateSelects}
            moreSelects={MyProductBoxSelects.후기안씀.moreSelects}
          />
        ))}
      </BuyHistoryPageStyled>
    </>
  );
};
export default BuyHistoryPage;
