import { getAllSaleReviews } from 'apis/sale-review/api';
import QUERY_KEYS from 'constants/queryKeys';
import { PagiNation } from 'interfaces/Pagination.interface';
import { IReview } from 'interfaces/Review.interface';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';

interface CustomQueryOption
  extends UseInfiniteQueryOptions<PagiNation<IReview[]>, unknown, PagiNation<IReview[]>, PagiNation<IReview[]>, any> {
  userId: number;
}
const useReviewsLoad = ({ userId, ...options }: CustomQueryOption) => {
  const { ref, inView } = useInView();
  const { data, refetch, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    [QUERY_KEYS.SALEREVIEWS, userId],
    ({ pageParam = 0 }) => getAllSaleReviews({ userId, page: pageParam }),
    {
      getNextPageParam: (lastPage: PagiNation<IReview[]>) => (!lastPage.isLast ? lastPage.nextPage : undefined),
      ...options,
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

export default useReviewsLoad;
