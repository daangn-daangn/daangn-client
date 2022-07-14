import { PutProdcutHide, putProductHide } from 'apis/product/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useProductHide = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PutProdcutHide>) => {
  return useMutation(putProductHide, option);
};

export default useProductHide;
