import { getSalesHistory } from 'apis/product/api';
import { IProductWithUser, ProductState } from 'interfaces/Product.interface';
import { useQuery } from 'react-query';

const useProductHistoryLoad = (productState: ProductState) => {
  return useQuery<IProductWithUser[]>(['products', productState], () => getSalesHistory(productState));
};

export default useProductHistoryLoad;
