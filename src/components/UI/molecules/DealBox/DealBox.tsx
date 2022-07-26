import QUERY_KEYS from 'constants/queryKeys';
import useChatRoomCreate from 'hooks/queries/chat/useChatRoomCreate';
import useProductDetail from 'hooks/queries/product/useProductDetail';
import useProdcutFavorite from 'hooks/queries/product/useProductFavorite';
import useProdcutFavoriteDelete from 'hooks/queries/product/useProductFavoriteDelete';
import { IProductWithUser } from 'interfaces/Product.interface';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../atoms/Button/Button';
import Like from '../../atoms/Like/Like';
import Price from '../../atoms/Price/Price';
import { StyledDealBox } from './DealBoxStyled';

export interface DealBoxProps {
  isFavorite: boolean;
  productPrice: number;
  isMyProduct: boolean;
  chatLength: number;
  productId: number;
  sellerId: number;
}

const DealBox = ({ isFavorite, productPrice, isMyProduct, chatLength, productId, sellerId }: DealBoxProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const queryKey = [QUERY_KEYS.PRODUCTS, productId];
  const favoriteMutation = useProdcutFavorite({
    onMutate: async () => {
      await queryClient.cancelQueries(queryKey);
      const previousProduct = queryClient.getQueryData<IProductWithUser>(queryKey);
      queryClient.setQueryData<IProductWithUser | undefined>(
        queryKey,
        (oldProduct) =>
          oldProduct && {
            ...oldProduct,
            is_favorite: true,
          },
      );
      return previousProduct;
    },
    onError: (error, variables, previousProduct) => {
      if (previousProduct) {
        queryClient.setQueryData(queryKey, previousProduct);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      toast.success('찜 목록에 추가되었습니다.');
    },
  });
  const deleteFavoriteMutation = useProdcutFavoriteDelete({
    onMutate: async () => {
      await queryClient.cancelQueries(queryKey);
      const previousProduct = queryClient.getQueryData<IProductWithUser>(queryKey);
      queryClient.setQueryData<IProductWithUser | undefined>(
        queryKey,
        (oldProduct) =>
          oldProduct && {
            ...oldProduct,
            is_favorite: false,
          },
      );
      return previousProduct;
    },
    onError: (error, variables, previousProduct) => {
      if (previousProduct) {
        queryClient.setQueryData(queryKey, previousProduct);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      toast.success('찜 목록에서 삭제되었습니다.');
    },
  });
  const createChatRoomMutation = useChatRoomCreate({
    // onError: (error) => {
    //   console.log(error);
    // },
    onSuccess: ({ room_id }) => {
      navigate('/chat');
    },
  });
  const onClickFavorit = () => {
    // 찜하기 Update API 요청
    if (!isFavorite) favoriteMutation.mutate({ productId });
    else deleteFavoriteMutation.mutate({ productId });
  };
  const onClickChat = () => {
    // 채팅방 Create API 요청
    createChatRoomMutation.mutate({ product_id: productId, other_user_id: sellerId });
  };
  const onClickMyProductChat = () => {
    // 채팅 페이지로 이동
    navigate('/chat');
  };
  return (
    <StyledDealBox>
      <Like onClick={onClickFavorit} width="18px" height="18px" isFavorite={isFavorite} />
      <div className="line"></div>
      <div className="dealBox_priceWrapper">
        <Price productPrice={productPrice} />
      </div>
      {isMyProduct ? (
        <Button onClick={onClickMyProductChat}>채팅 목록 보기 ({chatLength})</Button>
      ) : (
        <Button onClick={onClickChat}>채팅으로 거래하기</Button>
      )}
    </StyledDealBox>
  );
};

export default DealBox;
