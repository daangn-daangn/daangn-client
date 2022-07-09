import { createSearchParams, useNavigate } from 'react-router-dom';
import { atom, selector } from 'recoil';

export const searchParamsState = atom<{ title: string; categories: number[]; minPrice: string; maxPrice: string }>({
  key: 'searchParamsState',
  default: { title: '', categories: [], minPrice: '', maxPrice: '' },
});

export const craeteSearchParamsState = selector({
  key: 'craeteSearchParamsState',
  get: ({ get }) => {
    const { title, categories, minPrice, maxPrice } = get(searchParamsState);
    let params = {};
    params = {
      ...{ ...(title && { title }) },
      ...{ ...(categories.join() && { categories: categories.join() }) },
      ...{ ...(minPrice && { minPrice }) },
      ...{ ...(maxPrice && { maxPrice }) },
    };
    return `${createSearchParams(params)}`;
  },
});
