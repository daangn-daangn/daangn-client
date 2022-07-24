import axios from 'axios';

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

export const getAllSaleRevies = async (userId: number) => {
  return axios
    .get(`/api/sale-reviews/user/${userId}`)
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const getSellerReviews = async (userId: number) => {
  return axios
    .get(`/api/sale-reviews/seller/${userId}`)
    .then((res) => res.data.response)
    .catch((error) => {
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

export const getBuyerReviews = async (userId: number) => {
  return axios
    .get(`/api/sale-reviews/buyer/${userId}`)
    .then((res) => res.data.response)
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
