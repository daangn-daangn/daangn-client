import axios from 'axios';

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

export const getBuyerReviews = async (userId: number) => {
  return axios
    .get(`/api/sale-reviews/buyer/${userId}`)
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};
