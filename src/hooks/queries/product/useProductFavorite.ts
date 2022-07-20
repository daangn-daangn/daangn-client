import { postProductFavorite, PostProductFavoriteParams } from 'apis/product/api';
import { ResposeSuccessType } from 'interfaces/Response.interfact';
import { useMutation, UseMutationOptions } from 'react-query';

const useProdcutFavorite = (
  option?: UseMutationOptions<ResposeSuccessType<{ favorite_id: number }>, Error, PostProductFavoriteParams>,
) => {
  return useMutation(postProductFavorite, option);
};

export default useProdcutFavorite;
