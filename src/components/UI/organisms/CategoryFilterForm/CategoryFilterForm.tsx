import Button from '@atoms/Button/Button';
import Input from '@atoms/Input/Input';
import Title from '@atoms/Title/Title';
import CategoryFilter, { checkIncludeCategory } from '@molecules/CategoryFilter/CategoryFilter';
import InputText from '@molecules/InputText/InputText';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CategoryFilterFormStyled } from './CategoryFilterFormStyled';

interface IForm {
  checkCategories: { id: number; name: string }[];
  min?: number;
  max?: number;
}

export interface CategoryFilterFormProps {}

const CategoryFilterForm = (props: CategoryFilterFormProps) => {
  const { register, handleSubmit, watch, setValue, reset } = useForm<IForm>({
    defaultValues: {
      checkCategories: [],
    },
  });
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };
  const onClickCategory = (category: { id: number; name: string }) => {
    if (checkIncludeCategory(category, watch('checkCategories'))) {
      const categoryList = watch('checkCategories').filter(
        (checkCategory) => JSON.stringify(checkCategory) !== JSON.stringify(category),
      );
      setValue('checkCategories', categoryList);
      return;
    }
    setValue('checkCategories', [...watch('checkCategories'), category]);
  };
  const onReset = () => {
    reset();
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
