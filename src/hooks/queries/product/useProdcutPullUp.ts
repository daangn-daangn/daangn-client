import { PutProdcutPullUpParams, putProductPullUp } from 'apis/product/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useProdcutPullUp = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PutProdcutPullUpParams>) => {
  return useMutation(putProductPullUp, option);
};

export default useProdcutPullUp;
