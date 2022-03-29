import Applayout from '../../../Layouts/AppLayout';
import PostButton from '../../UI/atoms/PostButton/PostButton';
import NavBar from '../../UI/organisms/NavBar/NavBar';
import ProductBoxes from '../../UI/organisms/ProductBoxes/ProductBoxes';
import TabBar from '../../UI/organisms/TabBar/TabBar';
import { StyledHome } from './HomeStyled';

export interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <StyledHome>
      <NavBar type="홈" location="대연동" />
      <Applayout>
        <ProductBoxes />
      </Applayout>
      <TabBar />
      <PostButton />
    </StyledHome>
  );
};

export default Home;
