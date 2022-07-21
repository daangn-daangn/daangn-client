import { useNavigate, useLocation } from 'react-router-dom';
import Top from '@molecules/Top/Top';
import { INewProduct } from 'interfaces/Product.interface';
import { CategotyPageStyled } from './CategotyPageStyled';
import { ReactComponent as Check } from 'assets/check.svg';
import { categoryList } from 'utils/categoryFilter';

export interface CategotyPageProps {}

const CategotyPage = (props: CategotyPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as INewProduct;

  const clickCategory = (category_id: number) => {
    state.category_id = category_id;
    navigate('/product/new', { state: { ...state } });
  };

  return (
    <CategotyPageStyled>
      <Top title="카테고리 선택" left="prev" />
      {categoryList.map((category, index) => (
        <div className="category" key={index} onClick={() => clickCategory(category.id)}>
          {state?.category_id === category.id ? (
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
