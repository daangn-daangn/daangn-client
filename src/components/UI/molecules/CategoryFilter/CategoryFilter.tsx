import CheckBox from '@atoms/CheckBox/CheckBox';
import Title from '@atoms/Title/Title';
import { categoryList } from 'utils/categoryFilter';

import { CategoryFilterStyled } from './CategoryFilterStyled';

export interface CategoryFilterProps {
  onClick: (category: number) => void;
  checkCategories: number[];
}

export const checkIncludeCategory = (categoryId: number, checkCategories: number[]) => {
  return Boolean(checkCategories.find((checkCategoryId) => checkCategoryId == categoryId));
};

const CategoryFilter = ({ onClick, checkCategories }: CategoryFilterProps) => {
  return (
    <CategoryFilterStyled>
      <Title fontWeigt="700">카테고리</Title>
      <ul className="category_list">
        {categoryList.map((category) => (
          <li key={category.name} onClick={() => onClick(category.id)}>
            <CheckBox text={category.name} isCheck={checkIncludeCategory(category.id, checkCategories)} />
          </li>
        ))}
      </ul>
    </CategoryFilterStyled>
  );
};

export default CategoryFilter;
