import axios from 'axios';
import { PagiNationParams } from 'interfaces/Pagination.interface';
import { createPaginationValue } from 'utils/createPaginationValue';

export interface PostSellerReviewParams {
  product_id: number;
  buyer_id: number;
  content: string;
}

export interface PostBuyerReviewParams {
  product_id: number;
  seller_id: number;
  content: string;
}

export interface PutReviewHideParams {
  review_id: number;
}
export interface DeleteSellerReviewParams {
  sellerReviewId: number;
}
export interface DeleteBuyererReviewParams {
  buyerReviewId: number;
}

export interface GetReviewsParams extends PagiNationParams {
  userId: number;
}

export const getAllSaleReviews = async ({ userId, page = 0 }: GetReviewsParams) => {
  return axios
    .get(`/api/sale-reviews/user/${userId}`, { params: { page } })
    .then((res) =>
      createPaginationValue({
        data: res.data.response,
        page,
      }),
    )
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const getSellerReviews = async ({ userId, page = 0 }: GetReviewsParams) => {
  return axios
    .get(`/api/sale-reviews/seller/${userId}`, { params: { page } })
    .then((res) =>
      createPaginationValue({
        data: res.data.response,
        page,
      }),
    )
    .catch((error) => {
      console.log('??');
      console.error(error);
      throw new Error(error);
    });
};

export const postSellerReview = async (postSellerReviewParams: PostSellerReviewParams) => {
  return axios
    .post('/api/sale-reviews/seller', postSellerReviewParams)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const deleteSellerReview = async ({ sellerReviewId }: DeleteSellerReviewParams) => {
  return axios
    .delete(`/api/sale-reviews/seller/${sellerReviewId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const getBuyerReviews = async ({ userId, page = 0 }: GetReviewsParams) => {
  return axios
    .get(`/api/sale-reviews/buyer/${userId}`, { params: { page } })
    .then((res) =>
      createPaginationValue({
        data: res.data.response,
        page,
      }),
    )
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const postBuyerReview = async (postBuyerReviewParams: PostBuyerReviewParams) => {
  return axios
    .post('/api/sale-reviews/buyer', postBuyerReviewParams)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const deleteBuyerReview = async ({ buyerReviewId }: DeleteBuyererReviewParams) => {
  return axios
    .delete(`/api/sale-reviews/buyer/${buyerReviewId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const putReviewHide = async ({ review_id }: PutReviewHideParams) => {
  return axios
    .put(`/api/sale-reviews/hide/${review_id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};
