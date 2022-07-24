import { getSellerReviews } from 'apis/sale-review/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IReview } from 'interfaces/Review.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IReview[], unknown> {
  userId: number;
}

const useSellerReviewsLoad = ({ userId, ...options }: CustomQueryOption) => {
  return useQuery<IReview[]>(
    [QUERY_KEYS.SALEREVIEWS, QUERY_KEYS.SALEREVIEWS_SELLER, userId],
    () => getSellerReviews(userId),
    options,
  );
};

export default useSellerReviewsLoad;
