import Button from '@atoms/Button/Button';
import Input from '@atoms/Input/Input';
import Title from '@atoms/Title/Title';
import CategoryFilter, { checkIncludeCategory } from '@molecules/CategoryFilter/CategoryFilter';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchParamsState } from 'stores/Home';
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
  const [searchParams, setSearchParams] = useRecoilState(searchParamsState);
  const { register, handleSubmit, watch, setValue } = useForm<IForm>({
    defaultValues: {
      checkCategories: searchParams.categories,
      min: searchParams.minPrice,
      max: searchParams.maxPrice,
    },
  });
  const onSubmit: SubmitHandler<IForm> = (data) => {
    setSearchParams((prevSearchParms) => ({
      ...prevSearchParms,
      categories: data.checkCategories,
      minPrice: data.min || '',
      maxPrice: data.max || '',
    }));
    navigate({
      pathname: '/',
      search: createSearchParamFn({
        title: searchParams.title,
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
    setSearchParams((prevSearchParams) => ({ ...prevSearchParams, categories: [], minPrice: '', maxPrice: '' }));
    setValue('min', '');
    setValue('max', '');
    setValue('checkCategories', []);
  };
  return (
    <CategoryFilterFormStyled onSubmit={handleSubmit(onSubmit)}>
      <CategoryFilter onClick={onClickCategory} checkCategories={watch('checkCategories')} />
      <div className="price_filter">
        <Title fontWeigt="700">?????? ??????</Title>
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
            placeholder="????????????"
          />
        </div>
      </div>
      <div className="categoryfilter_btns">
        <Button onClick={onReset} height="50px">
          ?????????
        </Button>
        <Button type="submit" height="50px">
          ??????
        </Button>
      </div>
    </CategoryFilterFormStyled>
  );
};

export default CategoryFilterForm;
