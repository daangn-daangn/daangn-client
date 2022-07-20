import { DeleteProdductParams, deleteProduct } from 'apis/product/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useProdcutDelete = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, DeleteProdductParams>) => {
  return useMutation(deleteProduct, option);
};

export default useProdcutDelete;
