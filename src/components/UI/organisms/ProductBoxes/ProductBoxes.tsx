import { Link } from 'react-router-dom';
import { IProduct } from 'interfaces/Product.interface';
import ProductBox from '../../molecules/ProductBox/ProductBox';
import { StyledProductBoxes } from './ProductBoxesStyled';

export interface ProductBoxesProps {
  products: Pick<
    IProduct,
    'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'favorite_count'
  >[];
}

const ProductBoxes = ({ products }: ProductBoxesProps) => {
  return (
    <StyledProductBoxes>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductBox product={product} />
        </Link>
      ))}
    </StyledProductBoxes>
  );
};

export default ProductBoxes;
