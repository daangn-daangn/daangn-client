import { deleteSellerReview, DeleteSellerReviewParams } from 'apis/sale-review/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useSellerReviewDelete = (
  option?: UseMutationOptions<AxiosResponse<unknown>, Error, DeleteSellerReviewParams>,
) => {
  return useMutation(deleteSellerReview, option);
};

export default useSellerReviewDelete;
