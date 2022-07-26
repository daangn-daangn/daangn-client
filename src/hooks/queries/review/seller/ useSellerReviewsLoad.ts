import { getSellerReviews } from 'apis/sale-review/api';
import QUERY_KEYS from 'constants/queryKeys';
import { PagiNation } from 'interfaces/Pagination.interface';
import { IReview } from 'interfaces/Review.interface';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, UseInfiniteQueryOptions, useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption
  extends UseInfiniteQueryOptions<PagiNation<IReview[]>, unknown, PagiNation<IReview[]>, PagiNation<IReview[]>, any> {
  userId: number;
}
const useSellerReviewsLoad = ({ userId, ...options }: CustomQueryOption) => {
  const { ref, inView } = useInView();
  const { data, refetch, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    [QUERY_KEYS.SALEREVIEWS, QUERY_KEYS.SALEREVIEWS_SELLER, userId],
    ({ pageParam = 0 }) => getSellerReviews({ userId, page: pageParam }),
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

export default useSellerReviewsLoad;
