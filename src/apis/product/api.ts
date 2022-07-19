import axios from 'axios';
import { INewProduct, ProductState } from 'interfaces/Product.interface';
import checkProdcutStateNum from 'utils/checkProdcutStateNum';

interface IProductIdParams {
  productId: number;
}

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

export interface PutProductChangeStateParmas {
  productId: number;
  productState: ProductState;
  buyerId?: number;
}

export interface PutProdcutPullUpParams extends IProductIdParams {}

export interface PutProdcutHideParams extends IProductIdParams {}

export interface DeleteProdductParams extends IProductIdParams {}

export interface PostProductFavoriteParams extends IProductIdParams {}
export interface DeleteProductFavoriteParams extends IProductIdParams {}

export const getProdcts = async ({ title, categories, minPrice, maxPrice }: GetProdctsParams) => {
  return axios
    .get('/api/products', {
      params: { title, category: categories, 'min-price': minPrice, 'max-price': maxPrice },
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
  return axios
    .get(`/api/products/sales-history?state=${stateNum}`)
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const getProductById = async (productId: number) => {
  return axios.get(`/api/products/${productId}`).then((res) => res.data.response);
};

export const putProductChangeState = async ({ productId, productState, buyerId }: PutProductChangeStateParmas) => {
  const state = checkProdcutStateNum(productState);
  return axios.put(`/api/products/state/${productId}`, { state, buyerId }).then((res) => res.data);
};

export const putProductPullUp = async ({ productId }: PutProdcutPullUpParams) => {
  return axios.put(`/api/products/refreshment/${productId}`).then((res) => res.data);
};

export const putProductHide = async ({ productId }: PutProdcutHideParams) => {
  return axios.put(`/api/sale-reviews/hide/${productId}`).then((res) => res.data);
};

export const deleteProduct = async ({ productId }: DeleteProdductParams) => {
  return axios.delete(`/api/products/${productId}`).then((res) => res.data);
};

export const getPurchaseHistory = async () => {
  return axios
    .get(`/api/products/purchase-history`)
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const getProductFavorite = async () => {
  return axios
    .get('/api/favorite-products')
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const postProductFavorite = async ({ productId }: PostProductFavoriteParams) => {
  return axios
    .post('/api/favorite-products', {
      product_id: productId,
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const deleteProductFavorite = async ({ productId }: DeleteProductFavoriteParams) => {
  return axios
    .delete(`/api/favorite-products/products/${productId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};
