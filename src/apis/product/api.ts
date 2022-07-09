import axios from 'axios';
import { INewProduct } from 'interfaces/Product.interface';

export interface GetProdctsParams {
  title?: string | null;
  categories?: string | null;
  minPrice?: string | null;
  maxPrice?: string | null;
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

export const postNewProduct = async (newProduct: INewProduct) => {
  return axios.post('/api/products', { ...newProduct });
};
