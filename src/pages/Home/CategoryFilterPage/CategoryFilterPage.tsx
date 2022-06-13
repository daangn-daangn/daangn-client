import Top from '@molecules/Top/Top';
import CategoryFilterForm from '@organisms/CategoryFilterForm/CategoryFilterForm';
import { CategoryFilterPageStyled } from './CategoryFilterPageStyled';

const CategoryFilterPage = () => {
  return (
    <CategoryFilterPageStyled>
      <Top left="prev" title="검색 필터" />
      <CategoryFilterForm />
    </CategoryFilterPageStyled>
  );
};

export default CategoryFilterPage;
