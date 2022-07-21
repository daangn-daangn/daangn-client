import { DeleteBuyererReviewParams, deleteBuyerReview } from 'apis/sale-review/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useBuyerReviewDelete = (
  option?: UseMutationOptions<AxiosResponse<unknown>, Error, DeleteBuyererReviewParams>,
) => {
  return useMutation(deleteBuyerReview, option);
};

export default useBuyerReviewDelete;
