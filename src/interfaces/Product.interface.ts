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
}
