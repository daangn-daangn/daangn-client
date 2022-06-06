import Top from '@molecules/Top/Top';
import CategoryFilterForm from '@organisms/CategoryFilterForm/CategoryFilterForm';
import { CategoryFilterPageStyled } from './CategoryFilterPageStyled';

const CategoryFilterPage = () => {
  return (
    <CategoryFilterPageStyled>
      <Top left="prev" title="프로필 설정" />
      <CategoryFilterForm />
    </CategoryFilterPageStyled>
  );
};

export default CategoryFilterPage;
