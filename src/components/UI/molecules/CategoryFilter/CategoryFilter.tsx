import CheckBox from '@atoms/CheckBox/CheckBox';
import Title from '@atoms/Title/Title';
import { CategoryFilterStyled } from './CategoryFilterStyled';

export const categoryList = [
  {
    id: 1,
    name: '디지털기기',
  },
  {
    id: 2,
    name: '생활가전',
  },
  {
    id: 3,
    name: '가구/인테리어',
  },
  {
    id: 4,
    name: '유아동',
  },
  {
    id: 5,
    name: '생활/가공식품',
  },
  {
    id: 6,
    name: '유아도서',
  },
  {
    id: 7,
    name: '스포츠/레저',
  },
  {
    id: 8,
    name: '여성잡화',
  },
  {
    id: 9,
    name: '여성의류',
  },
  {
    id: 10,
    name: '남성패션/잡화',
  },
  {
    id: 11,
    name: '게임/취미',
  },
  {
    id: 12,
    name: '뷰티/미용',
  },
  {
    id: 13,
    name: '반려동물용품',
  },
  {
    id: 14,
    name: '도서/티켓/음반',
  },
  {
    id: 15,
    name: '식물',
  },
  {
    id: 16,
    name: '기타 중고물품',
  },
];

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
