import { getPurchaseHistory } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductPurchasHistory } from 'interfaces/Product.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IProductPurchasHistory[], unknown> {}

const usePurchaseHistoryLoad = ({ ...options }: CustomQueryOption = {}) => {
  return useQuery<IProductPurchasHistory[]>([QUERY_KEYS.PRODUCTS, 'PURCHASE'], getPurchaseHistory, options);
};

export default usePurchaseHistoryLoad;
