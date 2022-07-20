import { IUser } from './User.interface';

export enum ProductState {
  HIDE = '숨김',
  FOR_SALE = '판매중',
  SOLD_OUT = '거래완료',
  REVERSED = '예약중',
  DELETE = '삭제상품',
}

export interface IProduct {
  id: number;
  title: string;
  categoryId: number;
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
  category_id: number;
  thumb_nail_image: File;
  product_images: FileList;
  price: string;
  description: string;
}

export interface IProductPurchasHistory {
  id: number;
  title: string;
  location: string;
  price: number;
  thumb_nail_image: string | null;
  favorite_count: number;
  chatting_count: number;
  has_review: boolean;
  created_at: Date;
}
