import { putReviewHide, PutReviewHideParams } from 'apis/sale-review/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useReviewHide = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PutReviewHideParams>) => {
  return useMutation(putReviewHide, option);
};

export default useReviewHide;
