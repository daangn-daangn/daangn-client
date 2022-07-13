import { ProductState } from 'interfaces/Product.interface';

const checkProdcutStateNum = (productState: ProductState) => {
  switch (productState) {
    case ProductState.HIDE:
      return 0;
    case ProductState.FOR_SALE:
      return 1;
    case ProductState.SOLD_OUT:
      return 2;
    case ProductState.REVERSED:
      return 3;
    case ProductState.DELETE:
      return 4;
    default:
      return -1;
  }
};

export default checkProdcutStateNum;
