import { getSalesHistory } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductLoad, IProductWithUser, ProductState } from 'interfaces/Product.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IProductLoad[], unknown> {
  productState: ProductState;
}

const useSalesHistoryLoad = ({ productState, ...options }: CustomQueryOption) => {
  return useQuery<IProductLoad[]>([QUERY_KEYS.PRODUCTS, productState], () => getSalesHistory(productState), options);
};

export default useSalesHistoryLoad;
