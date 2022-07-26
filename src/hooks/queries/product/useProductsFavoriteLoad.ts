import { getProductFavorite } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductFavorite } from 'interfaces/Product.interface';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { PageNation } from 'interfaces/Pagination.interface';
import { useEffect } from 'react';

const useProductsFavoriteLoad = () => {
  const { ref, inView } = useInView();
  const { data, refetch, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    [QUERY_KEYS.PRODUCTS, 'FAVORITE'],
    ({ pageParam = 0 }) => getProductFavorite({ page: pageParam }),
    {
      getNextPageParam: (lastPage: PageNation<IProductFavorite[]>) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
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

export default useProductsFavoriteLoad;
