import { IUser } from './User.interface';

export enum ProductState {
  DELETE = '삭제상품',
  REVERSED = '예약중',
  FOR_SALE = '판매중',
  SOLD_OUT = '판매완료',
}

export interface IProduct {
  id: number;
  title: string;
  category: string;
  thumb_nail_image: string;
  images: string[];
  location: string;
  created_at: Date;
  price: number;
  likes: number[];
  description: string;
  view: number;
  favorite: number;
  chat: number;
  state: ProductState;
}

export interface IProductWithUser extends IProduct {
  user: IUser;
}
