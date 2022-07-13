import { useNavigate, useLocation } from 'react-router-dom';
import { SellHistoryPageStyled } from './SellHistoryPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import { dummyProduct } from 'pages/Product/ProductDetailPage/ProductDetailPage';
import NavStateBar from '@molecules/NavStateBar/NavStateBar';
import { IProductWithUser, ProductState } from 'interfaces/Product.interface';
import { useQuery } from 'react-query';
import { getSalesHistory } from 'apis/product/api';
import useProductHistoryLoad from 'hooks/queries/product/useProductHistoryLoad';
import { useRecoilValue } from 'recoil';
import { selectProductIdState } from 'stores/Profile';
import useProductEditState from 'hooks/queries/product/useProductEditState';
import useProdcutPullUp from 'hooks/queries/product/useProdcutPullUp';
import useProductHide from 'hooks/queries/product/useProductHide';
import useProdcutDelete from 'hooks/queries/product/useProductDelete';

const SellHistoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { productState: ProductState };
  const selectProductId = useRecoilValue(selectProductIdState);
  const productEditStateMutation = useProductEditState({
    onSuccess: (data) => {
      //data
    },
  });
  const prodcutPullUpMutation = useProdcutPullUp({
    onSuccess: (data) => {
      //data
    },
    onError: (error) => {
      //error
    },
  });

  const prodcutHideMutation = useProductHide({
    onSuccess: (data) => {
      //data
    },
    onError: (error) => {
      //error
    },
  });

  const prodcutdeleteMutation = useProdcutDelete({
    onSuccess: (data) => {
      //data
    },
    onError: (error) => {
      //error
    },
  });
  /* API 붙힌 후 로직
  const { data: products } = useProductHistoryLoad(state.productState);
  */
  const navStates = [
    { menu: ProductState.FOR_SALE, onClick: () => navigate('', { state: { productState: ProductState.FOR_SALE } }) },
    { menu: ProductState.SOLD_OUT, onClick: () => navigate('', { state: { productState: ProductState.SOLD_OUT } }) },
    { menu: ProductState.HIDE, onClick: () => navigate('', { state: { productState: ProductState.HIDE } }) },
  ];

  const MyProductBoxSelects = {
    판매중: {
      stateSelects: [
        {
          content: '끌어올리기',
          function: (productId: number) => {
            console.log('끌어올리기', productId);
            // prodcutPullUpMutation.mutate({productId})
          },
        },
        {
          content: '예약중',
          function: (productId: number) => {
            //예약중변경 API 요청
            // productEditStateMutation.mutate({ productId, productState: ProductState.REVERSED });
          },
        },
        {
          content: '거래완료',
          function: (productId: number) => {
            // 거래완료 id 나중에 구매자 id구해 줘야함.
            // productEditStateMutation.mutate({ productId, productState: ProductState.SOLD_OUT, buyerId: 1 });
          },
        },
      ],
      moreSelects: [
        {
          content: '게시물 수정',
          function: () => {
            console.log('게시물 수정', selectProductId);
          },
        },
        {
          content: '숨기기',
          function: () => {
            // prodcutHideMutation.mutate({ productId: selectProductId });
          },
        },
        {
          content: '삭제',
          function: () => {
            console.log('삭제');
            // prodcutdeleteMutation.mutate({productId:selectProductId})
          },
        },
      ],
    },
    거래완료: {
      stateSelects: [{ content: '후기 보내기', function: (productId: number) => console.log('후기 보내기') }],
      moreSelects: [
        { content: '판매중', function: () => console.log('판매중') },
        {
          content: '게시글 수정',
          function: () => {
            console.log('게시물 수정');
          },
        },
        {
          content: '숨기기',
          function: () => {
            // prodcutHideMutation.mutate({ productId: selectProductId });
          },
        },
        {
          content: '삭제',
          function: () => {
            console.log('삭제');
            // prodcutdeleteMutation.mutate({productId:selectProductId})
          },
        },
      ],
    },
    숨김: {
      stateSelects: [{ content: '숨기기 해제', function: (productId: number) => console.log('숨기기 해제') }],
      moreSelects: [
        {
          content: '게시글 수정',
          function: () => {
            console.log('게시물 수정');
          },
        },
        {
          content: '삭제',
          function: () => {
            console.log('삭제');
            // prodcutdeleteMutation.mutate({productId:selectProductId})
          },
        },
      ],
    },
  };

  return (
    <>
      <SellHistoryPageStyled>
        <div className="sell-history-page-top">
          <Top title="판매내역" left="prev" leftClick={() => navigate('/profile')} />
          <NavStateBar states={navStates} />
        </div>
        {/* 게시글 없는 경우 나중에 추가 */}
        <MyProductBox
          type="sell"
          product={dummyProduct}
          stateSelects={
            MyProductBoxSelects[(state?.productState as keyof typeof MyProductBoxSelects) || ProductState.FOR_SALE]
              .stateSelects
          }
          moreSelects={
            MyProductBoxSelects[(state?.productState as keyof typeof MyProductBoxSelects) || ProductState.FOR_SALE]
              .moreSelects
          }
        />
        {/* API붙힌 후 로직
          {products?.map((product) => (
          <MyProductBox
            key={product.id}
            type="sell"
            product={product}
            stateSelects={
              MyProductBoxSelects[(state?.productState as keyof typeof MyProductBoxSelects) || ProductState.SOLD_OUT ].stateSelects
            }
            moreSelects={
              MyProductBoxSelects[(state?.productState as keyof typeof MyProductBoxSelects) || '판매중'].moreSelects
            }
          />
        ))}
        */}
      </SellHistoryPageStyled>
    </>
  );
};
export default SellHistoryPage;
