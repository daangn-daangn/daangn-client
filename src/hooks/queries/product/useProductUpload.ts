import { postNewProduct, PostProductUploadParams } from 'apis/product/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useProductUpload = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PostProductUploadParams>) => {
  return useMutation(postNewProduct, option);
};

export default useProductUpload;
