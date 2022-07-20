import { LikeListPageStyled } from './LikeListPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import { dummyProduct } from 'pages/Product/ProductDetailPage/ProductDetailPage';
import useProductsFavoriteLoad from 'hooks/queries/product/useProductsFavoriteLoad';
import Spinner from '@atoms/Spinner/Spinner';

const LikeListPage = () => {
  const { data: products } = useProductsFavoriteLoad({
    refetchOnWindowFocus: false,
  });
  if (!products) {
    return <Spinner />;
  }
  return (
    <>
      <LikeListPageStyled>
        <Top title="관심목록" left="prev" />
        {products.map((product) => (
          <MyProductBox key={product.id} type="like" product={product} />
        ))}
      </LikeListPageStyled>
    </>
  );
};
export default LikeListPage;
