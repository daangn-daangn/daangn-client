import { deleteProductFavorite, DeleteProductFavoriteParams } from 'apis/product/api';
import { ResposeSuccessType } from 'interfaces/Response.interfact';
import { useMutation, UseMutationOptions } from 'react-query';

const useProdcutFavoriteDelete = (
  option?: UseMutationOptions<ResposeSuccessType<any>, Error, DeleteProductFavoriteParams>,
) => {
  return useMutation(deleteProductFavorite, option);
};

export default useProdcutFavoriteDelete;
