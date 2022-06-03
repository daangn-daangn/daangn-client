import { LikeListPageStyled } from './LikeListPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import { dummyProduct } from 'pages/ProductDetailPage/ProductDetailPage';

const LikeListPage = () => {
  return (
    <>
      <LikeListPageStyled>
        <Top title="관심목록" left="prev" />
        <MyProductBox type="like" product={dummyProduct} />
        <MyProductBox type="like" product={dummyProduct} />
      </LikeListPageStyled>
    </>
  );
};
export default LikeListPage;
