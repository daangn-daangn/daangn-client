import { getProdcts } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductLoad } from 'interfaces/Product.interface';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { PagiNation } from 'interfaces/Pagination.interface';

const useProductsLoad = () => {
  const { ref, inView } = useInView();
  const [searchParams] = useSearchParams();
  const queries = {
    title: searchParams.get('title'),
    categories: searchParams.get('categories'),
    minPrice: searchParams.get('minPrice'),
    maxPrice: searchParams.get('maxPrice'),
  };
  const { data, refetch, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    [QUERY_KEYS.PRODUCTS, queries],
    ({ pageParam = 0 }) => getProdcts({ ...queries, page: pageParam }),
    {
      getNextPageParam: (lastPage: PagiNation<IProductLoad[]>) => (!lastPage.isLast ? lastPage.nextPage : undefined),
      refetchOnWindowFocus: false,
    },
  );
  useEffect(() => {
    if (inView && hasNextPage && !isFetching) fetchNextPage();
  }, [inView]);
  return {
    data,
    isFetching,
    isFetchingNextPage,
    ref,
    refetch,
  };
};

export default useProductsLoad;
