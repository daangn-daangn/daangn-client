import { ProductState } from 'interfaces/Product.interface';
import { Dispatch, SetStateAction } from 'react';
import { ProductStateChangeModalStyled, ProductStateChangeModalWrapper } from './ProductStateChangeModalStyled';

export interface ProductStateChangeModalProps {
  setShowProductStateModal: Dispatch<SetStateAction<boolean>>;
  productState: ProductState;
}

const ProductStateChangeModal = ({ setShowProductStateModal, productState }: ProductStateChangeModalProps) => {
  const onClickModalWrapper = () => {
    setShowProductStateModal((prev) => !prev);
  };
  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const onClickChangeState = () => {
    //Product State Change API
    //성공하면
    setShowProductStateModal((prev) => !prev);
  };

  return (
    <ProductStateChangeModalWrapper onClick={onClickModalWrapper}>
      <ProductStateChangeModalStyled onClick={onClickModal}>
        <div className="productStateModal_title">상태변경</div>
        <div className="productStateModal_buttons">
          {Object.values(ProductState)
            .filter((state) => state !== productState)
            .map((state) => (
              <div key={state} className="productStateModal_button" onClick={onClickChangeState}>
                {state}
              </div>
            ))}
        </div>
      </ProductStateChangeModalStyled>
    </ProductStateChangeModalWrapper>
  );
};

export default ProductStateChangeModal;
