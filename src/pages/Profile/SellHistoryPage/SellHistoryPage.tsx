import { useNavigate, useLocation } from 'react-router-dom';
import { SellHistoryPageStyled } from './SellHistoryPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import NavStateBar from '@molecules/NavStateBar/NavStateBar';
import { IProductWithUser, ProductState } from 'interfaces/Product.interface';
import useSalesHistoryLoad from 'hooks/queries/product/useSalesHistoryLoad';
import { useRecoilState } from 'recoil';
import { selectProductIdState } from 'stores/Profile';
import useProductEditState from 'hooks/queries/product/useProductEditState';
import useProdcutPullUp from 'hooks/queries/product/useProdcutPullUp';
import useProdcutDelete from 'hooks/queries/product/useProductDelete';
import { useEffect } from 'react';
import Spinner from '@atoms/Spinner/Spinner';
import { useQueryClient } from 'react-query';
import QUERY_KEYS from 'constants/queryKeys';

const SellHistoryPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { productState: ProductState };
  const { data: products } = useSalesHistoryLoad({
    productState: state?.productState || ProductState.FOR_SALE,
    refetchOnWindowFocus: false,
  });
  const queryKey = [QUERY_KEYS.PRODUCTS, state?.productState || ProductState.FOR_SALE];
  const [selectProductId, setSelectProductId] = useRecoilState(selectProductIdState);
  const productEditStateMutation = useProductEditState({
    onMutate: async ({ productId }) => {
      await queryClient.cancelQueries(queryKey);
      const previousProducts = queryClient.getQueryData<IProductWithUser[]>(queryKey);
      console.log(previousProducts);
      queryClient.setQueryData<IProductWithUser[] | undefined>(
        queryKey,
        (oldProducts) => oldProducts && oldProducts.filter((oldProduct) => oldProduct.id !== productId),
      );
      return previousProducts;
    },
    onError: (error, variables, previousProducts) => {
      if (previousProducts) {
        queryClient.setQueryData(queryKey, previousProducts);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  const prodcutPullUpMutation = useProdcutPullUp({
    onMutate: async ({ productId }) => {
      await queryClient.cancelQueries(queryKey);
      const previousProducts = queryClient.getQueryData<IProductWithUser[]>(queryKey);
      queryClient.setQueryData<IProductWithUser[] | undefined>(queryKey, (oldProducts) => {
        if (!oldProducts) return undefined;
        const product = oldProducts.find((oldProduct) => oldProduct.id === productId);
        if (!product) return undefined;
        const newProducts = oldProducts.filter((oldProduct) => oldProduct.id !== productId);
        return [product, ...newProducts];
      });
      return previousProducts;
    },
    onError: (error, variables, previousProducts) => {
      if (previousProducts) {
        queryClient.setQueryData(queryKey, previousProducts);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const prodcutdeleteMutation = useProdcutDelete({
    onMutate: async ({ productId }) => {
      await queryClient.cancelQueries(queryKey);
      const previousProducts = queryClient.getQueryData<IProductWithUser[]>(queryKey);
      console.log(previousProducts);
      queryClient.setQueryData<IProductWithUser[] | undefined>(
        queryKey,
        (oldProducts) => oldProducts && oldProducts.filter((oldProduct) => oldProduct.id != productId),
      );
      return previousProducts;
    },
    onError: (error, variables, previousProducts) => {
      if (previousProducts) {
        queryClient.setQueryData(queryKey, previousProducts);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  const navStates = [
    { menu: ProductState.FOR_SALE, onClick: () => navigate('', { state: { productState: ProductState.FOR_SALE } }) },
    { menu: ProductState.SOLD_OUT, onClick: () => navigate('', { state: { productState: ProductState.SOLD_OUT } }) },
    { menu: ProductState.HIDE, onClick: () => navigate('', { state: { productState: ProductState.HIDE } }) },
  ];

  useEffect(() => {
    // 페이지 나갈시 고른 productId -1로 초기화
    return () => setSelectProductId(-1);
  }, []);

  const MyProductBoxSelects = {
    판매중: {
      stateSelects: [
        {
          content: '끌어올리기',
          function: (productId: number) => {
            console.log('끌어올리기', productId);
            prodcutPullUpMutation.mutate({ productId });
          },
        },
        {
          content: '예약중',
          function: (productId: number) => {
            //예약중변경 API 요청
            productEditStateMutation.mutate({ productId, productState: ProductState.REVERSED });
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
            productEditStateMutation.mutate({ productId: selectProductId, productState: ProductState.HIDE });
          },
        },
        {
          content: '삭제',
          function: () => {
            console.log('삭제');
            prodcutdeleteMutation.mutate({ productId: selectProductId });
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
            productEditStateMutation.mutate({ productId: selectProductId, productState: ProductState.HIDE });
          },
        },
        {
          content: '삭제',
          function: () => {
            console.log('삭제');
            prodcutdeleteMutation.mutate({ productId: selectProductId });
          },
        },
      ],
    },
    숨김: {
      stateSelects: [
        {
          content: '숨기기 해제',
          function: (productId: number) => {
            productEditStateMutation.mutate({ productId, productState: ProductState.FOR_SALE });
          },
        },
      ],
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
            prodcutdeleteMutation.mutate({ productId: selectProductId });
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
        {products ? (
          products.map((product) => (
            <MyProductBox
              key={product.id}
              type="sell"
              product={product}
              stateSelects={
                MyProductBoxSelects[(state?.productState as keyof typeof MyProductBoxSelects) || ProductState.FOR_SALE]
                  .stateSelects
              }
              moreSelects={
                MyProductBoxSelects[(state?.productState as keyof typeof MyProductBoxSelects) || ProductState.FOR_SALE]
                  .moreSelects
              }
            />
          ))
        ) : (
          <Spinner />
        )}
      </SellHistoryPageStyled>
    </>
  );
};
export default SellHistoryPage;
