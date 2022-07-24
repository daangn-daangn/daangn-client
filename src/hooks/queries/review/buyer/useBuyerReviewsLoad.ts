import { getBuyerReviews } from 'apis/sale-review/api';
import QUERY_KEYS from 'constants/queryKeys';
import { IReview } from 'interfaces/Review.interface';
import { useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<IReview[], unknown> {
  userId: number;
}

const useBuyerReviewsLoad = ({ userId, ...options }: CustomQueryOption) => {
  return useQuery<IReview[]>(
    [QUERY_KEYS.SALEREVIEWS, QUERY_KEYS.SALEREVIEWS_BUYER, userId],
    () => getBuyerReviews(userId),
    options,
  );
};

export default useBuyerReviewsLoad;
