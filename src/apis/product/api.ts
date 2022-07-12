import axios from 'axios';
import { INewProduct, ProductState } from 'interfaces/Product.interface';

export interface GetProdctsParams {
  title?: string | null;
  categories?: string | null;
  minPrice?: string | null;
  maxPrice?: string | null;
}

export interface PostProductUploadParams {
  category_id: number;
  title: string;
  price: number;
  description: string;
  product_images: FileList;
}

export const getProdcts = async ({ title, categories, minPrice, maxPrice }: GetProdctsParams) => {
  let url = '/api/product';
  let flag = '?';
  if (title) {
    url += `${flag}title=${title}`;
    flag = '&';
  }
  if (categories) {
    url += `${flag}category=${categories}`;
    flag = '&';
  }
  if (minPrice) {
    url += `${flag}minPrice=${minPrice}`;
  }
  if (maxPrice) {
    url += `${flag}maxPrice=${maxPrice}`;
  }
  return axios.get(url).then((res) => res.data);
};

export const postNewProduct = async (newProduct: PostProductUploadParams) => {
  return axios.post('/api/products', { ...newProduct });
};

export const deleteProduct = async (productId: number) => {
  return axios.delete(`/api/products/${productId}`);
};

export const getSalesHistory = async (productState: ProductState) => {
  let stateNum = 1;
  console.log(productState);
  if (productState === ProductState.HIDE) {
    stateNum = 0;
  }
  if (productState === ProductState.FOR_SALE) {
    stateNum = 1;
  }
  if (productState === ProductState.SOLD_OUT) {
    stateNum = 2;
  }
  return axios.get(`/api/products/sales-history?state=${stateNum}`).then((res) => res.data);
};

export const getProductById = async (productId: number) => {
  return axios.get(`/api/products/${productId}`).then((res) => res.data);
};
