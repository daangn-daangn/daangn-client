import { EditProdctsParams, putProductEdit } from 'apis/product/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useProductEdit = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, EditProdctsParams>) => {
  return useMutation(putProductEdit, option);
};

export default useProductEdit;
