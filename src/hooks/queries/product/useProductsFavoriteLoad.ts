import { getProductFavorite } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductFavorite } from 'interfaces/Product.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IProductFavorite[], unknown> {}

const useProductsFavoriteLoad = ({ ...options }: CustomQueryOption = {}) => {
  return useQuery<IProductFavorite[]>([QUERY_KEYS.PRODUCTS, 'FAVORITE'], getProductFavorite, options);
};

export default useProductsFavoriteLoad;
