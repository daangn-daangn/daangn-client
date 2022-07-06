import { IUser } from './User.interface';

export enum ProductState {
  DELETE = '삭제상품',
  REVERSED = '예약중',
  FOR_SALE = '판매중',
  SOLD_OUT = '거래완료',
}

export interface IProduct {
  id: number;
  title: string;
  category: string;
  thumb_nail_image: string;
  product_images: string[];
  location: string;
  created_at: Date;
  price: number;
  description: string;
  view: number;
  favorite_count: number;
  chatting_count: number;
  product_state: ProductState;
}

export interface IProductWithUser extends IProduct {
  seller: IUser;
}

export interface INewProduct {
  title: string;
  category: string;
  thumb_nail_image: File;
  images: FileList;
  price: string;
  description: string;
}
