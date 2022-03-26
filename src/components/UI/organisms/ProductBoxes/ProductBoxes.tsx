import ProductBox from '../../molecules/ProductBox/ProductBox';
import { StyledProductBoxes } from './ProductBoxesStyled';

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

const dummyProduct: Partial<IProduct> = {
  id: 1,
  title: '아이폰 팔아요',
  thumb_nail_image:
    'https://dnvefa72aowie.cloudfront.net/origin/article/202201/300ec7e016841850b703e391d7b276f9198c54e7075a32df5a80b6fdd8563a6b.webp?q=82&s=300x300&t=crop',
  location: '대연동',
  created_at: new Date(),
  price: 300000,
  likes: [1, 2, 3, 4, 5],
};

const dummyProducts: IProduct[] = Array(10)
  .fill(dummyProduct)
  .map((dummyProduct, index) => {
    const indexDummyProduct = { ...dummyProduct };
    indexDummyProduct.id = index + 1;
    return indexDummyProduct;
  });

export interface ProductBoxesProps {}

const ProductBoxes = (props: ProductBoxesProps) => {
  return (
    <StyledProductBoxes>
      {dummyProducts.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </StyledProductBoxes>
  );
};

export default ProductBoxes;
