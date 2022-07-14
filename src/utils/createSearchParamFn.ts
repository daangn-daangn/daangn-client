import { GetProdctsParams } from 'apis/product/api';
import { createSearchParams } from 'react-router-dom';

export const createSearchParamFn = ({ title, categories, minPrice, maxPrice }: GetProdctsParams) => {
  let params = {};
  params = {
    ...{ ...(title && { title }) },
    ...{ ...(categories && { categories }) },
    ...{ ...(minPrice && { minPrice }) },
    ...{ ...(maxPrice && { maxPrice }) },
  };
  return `?${createSearchParams(params)}`;
};
