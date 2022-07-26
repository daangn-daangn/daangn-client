import { atom } from 'recoil';

type buyerReviewType = {
  type: 'buyer';
  product_id: number;
  seller_id: number;
};

type sellerReviewType = {
  type: 'seller';
  product_id: number;
  buyer_id: number;
};

type reviewUploadType = buyerReviewType | sellerReviewType | null;

export const reviewUploadState = atom<reviewUploadType>({
  key: 'reviewUploadState',
  default: null,
});
