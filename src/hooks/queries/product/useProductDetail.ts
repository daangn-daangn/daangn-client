import { getProductById } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductWithUser } from 'interfaces/Product.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IProductWithUser, unknown> {
  productId: number;
}

const useProductDetail = ({ productId, ...option }: CustomQueryOption) => {
  return useQuery<IProductWithUser>([QUERY_KEYS.PRODUCTS, productId], () => getProductById(productId), option);
};

export default useProductDetail;
