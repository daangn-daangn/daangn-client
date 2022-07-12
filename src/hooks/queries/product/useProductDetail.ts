import { getProductById } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductWithUser } from 'interfaces/Product.interface';
import { useQuery } from 'react-query';

const useProductDetail = (productId: number) => {
  return useQuery<IProductWithUser>([QUERY_KEYS.PRODUCTS, productId], () => getProductById(productId));
};

export default useProductDetail;
