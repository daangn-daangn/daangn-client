import { useNavigate, useLocation } from 'react-router-dom';
import Top from '@molecules/Top/Top';
import { INewProduct } from 'interfaces/Product.interface';
import { CategotyPageStyled } from './CategotyPageStyled';
import { ReactComponent as Check } from 'assets/check.svg';
import { categoryList } from 'utils/categoryFilter';

// export const categories = [
//   '디지털기기',
//   '생활가전',
//   '가구/인테리어',
//   '유아동',
//   '유아도서',
//   '생활/가공식품',
//   '스포츠/레저',
//   '여성잡화',
//   '여성의류',
//   '남성패션/잡화',
//   '게임/취미',
//   '뷰티/미용',
//   '반려동물식품',
//   '도서/티켓/음반',
//   '식물',
//   '기타 중고물품',
// ];

export interface CategotyPageProps {}

const CategotyPage = (props: CategotyPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as INewProduct;

  const clickCategory = (categoryId: number) => {
    state.categoryId = categoryId;
    navigate('/product/new', { state: { ...state } });
  };

  return (
    <CategotyPageStyled>
      <Top title="카테고리 선택" left="prev" />
      {categoryList.map((category, index) => (
        <div className="category" key={index} onClick={() => clickCategory(category.id)}>
          {state?.categoryId === category.id ? (
            <>
              <p style={{ color: '#EE8548' }}>{category.name}</p>
              <Check />
            </>
          ) : (
            <p>{category.name}</p>
          )}
        </div>
      ))}
    </CategotyPageStyled>
  );
};

export default CategotyPage;
