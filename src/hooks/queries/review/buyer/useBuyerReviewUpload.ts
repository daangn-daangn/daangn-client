import { postBuyerReview, PostBuyerReviewParams } from 'apis/sale-review/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useBuyerReviewUpload = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PostBuyerReviewParams>) => {
  return useMutation(postBuyerReview, option);
};

export default useBuyerReviewUpload;
