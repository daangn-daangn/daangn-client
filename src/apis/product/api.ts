import axios from 'axios';
import { INewProduct, ProductState } from 'interfaces/Product.interface';
import checkProdcutStateNum from 'utils/checkProdcutStateNum';

export interface GetProdctsParams {
  title?: string | null;
  categories?: string | null;
  minPrice?: string | null;
  maxPrice?: string | null;
}

export interface EditProdctsParams {
  category_id: number;
  title: string;
  price: number;
  description: string;
  prodcutId: number;
}

export interface PostProductUploadParams {
  category_id: number;
  title: string;
  price: number;
  description: string;
  product_images: FileList;
}

export interface PutProductChangeState {
  productId: number;
  productState: ProductState;
  buyerId?: number;
}

export interface PutProdcutPullUp {
  productId: number;
}

export interface PutProdcutHide {
  productId: number;
}

export interface DeleteProdduct {
  productId: number;
}

export const getProdcts = async ({ title, categories, minPrice, maxPrice }: GetProdctsParams) => {
  return axios
    .get('/api/products', {
      params: { title, categories, minPrice, maxPrice },
    })
    .then((res) => res.data.response);
};

export const postNewProduct = async (newProduct: PostProductUploadParams) => {
  return axios.post('/api/products', { ...newProduct }).then((res) => res.data);
};

export const putProductEdit = async ({ prodcutId, ...rest }: EditProdctsParams) => {
  return axios.put(`/api/products/${prodcutId}`, { ...rest }).then((res) => res.data);
};

export const getSalesHistory = async (productState: ProductState) => {
  const stateNum = checkProdcutStateNum(productState);
  return axios.get(`/api/products/sales-history?state=${stateNum}`).then((res) => res.data);
};

export const getProductById = async (productId: number) => {
  return axios.get(`/api/products/${productId}`).then((res) => res.data);
};

export const putProductChangeState = async ({ productId, productState, buyerId }: PutProductChangeState) => {
  const stateNum = checkProdcutStateNum(productState);
  return axios.put(`/api/products/${productId}`, { stateNum, buyerId }).then((res) => res.data);
};

export const putProductPullUp = async ({ productId }: PutProdcutPullUp) => {
  return axios.put(`/api/products/refreshment/${productId}`).then((res) => res.data);
};

export const putProductHide = async ({ productId }: PutProdcutHide) => {
  return axios.put(`/api/sale-reviews/hide/${productId}`).then((res) => res.data);
};

export const deleteProduct = async ({ productId }: DeleteProdduct) => {
  return axios.delete(`/api/products/${productId}`).then((res) => res.data);
};

export const getPurchaseHistory = async () => {
  return axios.get(`/api/products/purchase-history`).then((res) => res.data);
};
