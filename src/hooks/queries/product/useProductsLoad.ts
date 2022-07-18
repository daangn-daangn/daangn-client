import { getProdcts } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProduct } from 'interfaces/Product.interface';
import { useQuery, UseQueryOptions } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { craeteSearchParamsState } from 'stores/Home';

interface CustomQueryOption extends UseQueryOptions<IProduct[], unknown> {}

const useProductsLoad = ({ ...options }: CustomQueryOption = {}) => {
  const [searchParams] = useSearchParams();
  // const craeteSearchParams = useRecoilValue(craeteSearchParamsState);
  // console.log(craeteSearchParams);
  const queries = {
    title: searchParams.get('title'),
    categories: searchParams.get('categories'),
    minPrice: searchParams.get('minPrice'),
    maxPrice: searchParams.get('maxPrice'),
  };
  return useQuery<IProduct[]>(
    [QUERY_KEYS.PRODUCTS, queries],
    () =>
      getProdcts({
        ...queries,
      }),
    options,
  );
};

export default useProductsLoad;
