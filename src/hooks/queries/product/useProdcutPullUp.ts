import { PutProdcutPullUp, putProductPullUp } from 'apis/product/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useProdcutPullUp = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PutProdcutPullUp>) => {
  return useMutation(putProductPullUp, option);
};

export default useProdcutPullUp;
