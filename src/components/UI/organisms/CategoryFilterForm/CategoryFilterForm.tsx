import Button from '@atoms/Button/Button';
import Input from '@atoms/Input/Input';
import Title from '@atoms/Title/Title';
import CategoryFilter, { checkIncludeCategory } from '@molecules/CategoryFilter/CategoryFilter';
import InputText from '@molecules/InputText/InputText';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { searchParamsCategories, searchParamsMaxPrice, searchParamsMinPrice, searchParamsTitle } from 'stores/Home';
import { createSearchParamFn } from 'utils/createSearchParamFn';
import { CategoryFilterFormStyled } from './CategoryFilterFormStyled';

interface IForm {
  checkCategories: number[];
  min?: string;
  max?: string;
}

export interface CategoryFilterFormProps {}

const CategoryFilterForm = (props: CategoryFilterFormProps) => {
  const navigate = useNavigate();
  const searchTitle = useRecoilValue(searchParamsTitle);
  const [searchCategories, setSearchCategories] = useRecoilState(searchParamsCategories);
  const [searchMinPrice, setSearchMinPrice] = useRecoilState(searchParamsMinPrice);
  const [searchMaxPrice, setSearchMaxPrice] = useRecoilState(searchParamsMaxPrice);
  const { register, handleSubmit, watch, setValue } = useForm<IForm>({
    defaultValues: {
      checkCategories: searchCategories,
      min: searchMinPrice,
      max: searchMaxPrice,
    },
  });
  const onSubmit: SubmitHandler<IForm> = (data) => {
    setSearchCategories(data.checkCategories);
    setSearchMinPrice(data.min || '');
    setSearchMaxPrice(data.max || '');
    navigate({
      pathname: '/',
      search: createSearchParamFn({
        title: searchTitle,
        categories: data.checkCategories.join(),
        minPrice: data.min?.replaceAll(',', ''),
        maxPrice: data.max?.replaceAll(',', ''),
      }),
    });
  };
  const onClickCategory = (categoryId: number) => {
    if (checkIncludeCategory(categoryId, watch('checkCategories'))) {
      const categoryIdList = watch('checkCategories').filter((checkCategoryId) => checkCategoryId != categoryId);
      setValue('checkCategories', categoryIdList);
      return;
    }
    setValue('checkCategories', [...watch('checkCategories'), categoryId]);
  };
  const onReset = () => {
    setSearchCategories([]);
    setSearchMinPrice('');
    setSearchMaxPrice('');
    setValue('min', '');
    setValue('max', '');
    setValue('checkCategories', []);
  };
  return (
    <CategoryFilterFormStyled onSubmit={handleSubmit(onSubmit)}>
      <CategoryFilter onClick={onClickCategory} checkCategories={watch('checkCategories')} />
      <div className="price_filter">
        <Title fontWeigt="700">가격 범위</Title>
        <div className="price_filter-input">
          <Input
            register={{
              ...register('min', {
                onChange: (e) => {
                  setValue('min', e.target.value.replace(/[^0-9]|(,)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                },
              }),
            }}
            placeholder="0"
          />
          <span>~</span>
          <Input
            register={{
              ...register('max', {
                onChange: (e) => {
                  setValue('max', e.target.value.replace(/[^0-9]|(,)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                },
              }),
            }}
            placeholder="제한없음"
          />
        </div>
      </div>
      <div className="categoryfilter_btns">
        <Button onClick={onReset} height="50px">
          초기화
        </Button>
        <Button type="submit" height="50px">
          적용
        </Button>
      </div>
    </CategoryFilterFormStyled>
  );
};

export default CategoryFilterForm;
