import { PutProductChangeStateParmas, putProductChangeState } from 'apis/product/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useProductEditState = (
  option?: UseMutationOptions<AxiosResponse<unknown>, Error, PutProductChangeStateParmas>,
) => {
  return useMutation(putProductChangeState, option);
};

export default useProductEditState;
