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
