import { ProductStateChangeButtonStyled } from './ProductStateChangeButtonStyled';
import { ReactComponent as Down } from 'assets/down.svg';
import { useState } from 'react';
import SelectModal from '@molecules/SelectModal/SelectModal';
import { IProductWithUser, ProductState } from 'interfaces/Product.interface';
import { ISelect } from '@molecules/MyProductBox/MyProductBox';
import useProductEditState from 'hooks/queries/product/useProductEditState';
import QUERY_KEYS from 'constants/queryKeys';
import { useQueryClient } from 'react-query';

export interface ProductStateChangeButtonProps {
  productId: number;
  productState: ProductState;
}

const ProductStateChangeButton = ({ productId, productState }: ProductStateChangeButtonProps) => {
  const queryClient = useQueryClient();
  const [showProductStateModal, setShowProductStateModal] = useState(false);
  const onClickShowModal = () => {
    setShowProductStateModal((prev) => !prev);
  };
  const queryKey = [QUERY_KEYS.PRODUCTS, productId];
  const mutation = useProductEditState({
    onMutate: async ({ productState }) => {
      await queryClient.cancelQueries(queryKey);
      const previousProduct = queryClient.getQueryData<IProductWithUser>(queryKey);
      queryClient.setQueryData<IProductWithUser | undefined>(
        queryKey,
        (oldProduct) =>
          oldProduct && {
            ...oldProduct,
            product_state: productState,
          },
      );
      return previousProduct;
    },
    onError: (error, variables, previousProduct) => {
      if (previousProduct) queryClient.setQueryData(queryKey, previousProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const ProductStateChangeSelects: ISelect[] = [];

  Object.values(ProductState).forEach((content) => {
    if (content === ProductState.HIDE || content === ProductState.DELETE || content === productState) return;
    ProductStateChangeSelects.push({
      content,
      function: () => {
        switch (content) {
          case ProductState.FOR_SALE:
            mutation.mutate({ productId, productState: content });
            break;
          case ProductState.REVERSED:
            mutation.mutate({ productId, productState: content });
            break;
          case ProductState.SOLD_OUT:
            console.log('구매자 선택 페이지로 이동');
            break;
          default:
            break;
        }
      },
    });
  });

  return (
    <>
      <ProductStateChangeButtonStyled onClick={onClickShowModal}>
        <span>{productState}</span>
        <Down />
      </ProductStateChangeButtonStyled>
      {showProductStateModal && (
        <SelectModal title="상태변경" selects={ProductStateChangeSelects} setModal={setShowProductStateModal} />
      )}
    </>
  );
};

export default ProductStateChangeButton;
