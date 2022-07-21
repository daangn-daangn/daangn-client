import { postSellerReview, PostSellerReviewParams } from 'apis/sale-review/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useSellerReviewUpload = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PostSellerReviewParams>) => {
  return useMutation(postSellerReview, option);
};

export default useSellerReviewUpload;
