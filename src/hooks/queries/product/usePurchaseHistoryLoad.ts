import { getPurchaseHistory } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductPurchasHistory } from 'interfaces/Product.interface';
import { useQuery } from 'react-query';

const usePurchaseHistoryLoad = () => {
  return useQuery<IProductPurchasHistory[]>([QUERY_KEYS.PRODUCTS, 'PURCHASE'], getPurchaseHistory);
};

export default usePurchaseHistoryLoad;
