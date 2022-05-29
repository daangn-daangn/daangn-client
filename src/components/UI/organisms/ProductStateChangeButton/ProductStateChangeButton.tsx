import { ProductStateChangeButtonStyled } from './ProductStateChangeButtonStyled';
import { ReactComponent as Down } from 'assets/down.svg';
import { useState } from 'react';
import ProductStateChangeModal from '@molecules/ProductStateChangeModal/ProductStateChangeModal';
import { ProductState } from 'interfaces/Product.interface';
export interface ProductStateChangeButtonProps {
  productState: ProductState;
}

const ProductStateChangeButton = ({ productState }: ProductStateChangeButtonProps) => {
  const [showProductStateModal, setShowProductStateModal] = useState(false);
  const onClickShowModal = () => {
    setShowProductStateModal((prev) => !prev);
  };
  return (
    <>
      <ProductStateChangeButtonStyled onClick={onClickShowModal}>
        <span>{productState}</span>
        <Down />
      </ProductStateChangeButtonStyled>
      {showProductStateModal && (
        <ProductStateChangeModal productState={productState} setShowProductStateModal={setShowProductStateModal} />
      )}
    </>
  );
};

export default ProductStateChangeButton;
