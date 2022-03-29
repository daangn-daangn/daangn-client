import { IProduct } from '../../../../interfaces/Product.interface';
import ProductBox from '../../molecules/ProductBox/ProductBox';
import { StyledProductBoxes } from './ProductBoxesStyled';

export interface ProductBoxesProps {
  products: Pick<IProduct, 'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'likes'>[];
}

const ProductBoxes = ({ products }: ProductBoxesProps) => {
  return (
    <StyledProductBoxes>
      {products.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </StyledProductBoxes>
  );
};

export default ProductBoxes;
