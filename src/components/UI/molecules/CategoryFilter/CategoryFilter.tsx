import CheckBox from '@atoms/CheckBox/CheckBox';
import Title from '@atoms/Title/Title';
import { categoryList } from 'utils/categoryFilter';

import { CategoryFilterStyled } from './CategoryFilterStyled';

export interface CategoryFilterProps {
  onClick: (category: { id: number; name: string }) => void;
  checkCategories: { id: number; name: string }[];
}

export const checkIncludeCategory = (
  category: { id: number; name: string },
  checkCategories: { id: number; name: string }[],
) => {
  let IncludeCategory = false;
  checkCategories.forEach((checkCategory) => {
    if (JSON.stringify(checkCategory) === JSON.stringify(category)) {
      IncludeCategory = true;
      return IncludeCategory;
    }
  });
  return IncludeCategory;
};

const CategoryFilter = ({ onClick, checkCategories }: CategoryFilterProps) => {
  return (
    <CategoryFilterStyled>
      <Title fontWeigt="700">카테고리</Title>
      <ul className="category_list">
        {categoryList.map((category) => (
          <li key={category.name} onClick={() => onClick(category)}>
            <CheckBox text={category.name} isCheck={checkIncludeCategory(category, checkCategories)} />
          </li>
        ))}
      </ul>
    </CategoryFilterStyled>
  );
};

export default CategoryFilter;
