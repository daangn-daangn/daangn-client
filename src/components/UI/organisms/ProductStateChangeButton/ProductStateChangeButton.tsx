import { ProductStateChangeButtonStyled } from './ProductStateChangeButtonStyled';
import { ReactComponent as Down } from 'assets/down.svg';
import { useState } from 'react';
import SelectModal from '@molecules/SelectModal/SelectModal';
import { ProductState } from 'interfaces/Product.interface';
import { ISelectNoParameter } from '@molecules/MyProductBox/MyProductBox';

export interface ProductStateChangeButtonProps {
  productState: ProductState;
}

const ProductStateChangeButton = ({ productState }: ProductStateChangeButtonProps) => {
  const [showProductStateModal, setShowProductStateModal] = useState(false);
  const onClickShowModal = () => {
    setShowProductStateModal((prev) => !prev);
  };
  const onClickChangeState = () => {
    //Product State Change API
    //성공하면
    setShowProductStateModal((prev) => !prev);
  };

  // const ProductStateChangeType = [ProductState.FOR_SALE, ProductState.SOLD_OUT];
  const ProductStateChangeSelects: ISelectNoParameter[] = [];

  Object.keys(ProductState).forEach((type) => {
    ProductStateChangeSelects.push({ content: type, function: onClickChangeState });
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
