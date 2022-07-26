import { getPurchaseHistory } from 'apis/product/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IProductPurchasHistory } from 'interfaces/Product.interface';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { PagiNation } from 'interfaces/Pagination.interface';
import { useEffect } from 'react';

const usePurchaseHistoryLoad = () => {
  const { ref, inView } = useInView();
  const { data, refetch, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    [QUERY_KEYS.PRODUCTS, 'PURCHASE'],
    ({ pageParam = 0 }) => getPurchaseHistory({ page: pageParam }),
    {
      getNextPageParam: (lastPage: PagiNation<IProductPurchasHistory[]>) =>
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

export default usePurchaseHistoryLoad;
