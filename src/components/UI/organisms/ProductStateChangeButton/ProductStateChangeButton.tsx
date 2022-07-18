import { ProductStateChangeButtonStyled } from './ProductStateChangeButtonStyled';
import { ReactComponent as Down } from 'assets/down.svg';
import { useState } from 'react';
import SelectModal from '@molecules/SelectModal/SelectModal';
import { ProductState } from 'interfaces/Product.interface';
import { ISelect } from '@molecules/MyProductBox/MyProductBox';
import useProductEditState from 'hooks/queries/product/useProductEditState';

export interface ProductStateChangeButtonProps {
  productId: number;
  productState: ProductState;
}

const ProductStateChangeButton = ({ productId, productState }: ProductStateChangeButtonProps) => {
  const [showProductStateModal, setShowProductStateModal] = useState(false);
  const [state, setState] = useState(productState);
  const onClickShowModal = () => {
    setShowProductStateModal((prev) => !prev);
  };
  const mutation = useProductEditState({
    onMutate: ({ productState }) => {
      setState(productState);
    },
  });

  const ProductStateChangeSelects: ISelect[] = [];

  Object.values(ProductState).forEach((content) => {
    if (content === ProductState.HIDE || content === ProductState.DELETE || content === state) return;
    ProductStateChangeSelects.push({
      content,
      function: () => {
        switch (content) {
          case ProductState.FOR_SALE:
            console.log('판매중');
            mutation.mutate({ productId, productState: content });
            break;
          case ProductState.REVERSED:
            console.log('예약');
            mutation.mutate({ productId, productState: content });
            break;
          case ProductState.SOLD_OUT:
            console.log('거래완료');
            // 구매자 선택 페이지로
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
        <span>{state}</span>
        <Down />
      </ProductStateChangeButtonStyled>
      {showProductStateModal && (
        <SelectModal title="상태변경" selects={ProductStateChangeSelects} setModal={setShowProductStateModal} />
      )}
    </>
  );
};

export default ProductStateChangeButton;
