import { getSalesHistory } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductWithUser, ProductState } from 'interfaces/Product.interface';
import { useQuery } from 'react-query';

const useSalesHistoryLoad = (productState: ProductState) => {
  return useQuery<IProductWithUser[]>([QUERY_KEYS.PRODUCTS, productState], () => getSalesHistory(productState));
};

export default useSalesHistoryLoad;
