import { atom } from 'recoil';

export const searchParamsState = atom<{ title: string; categories: number[]; minPrice: string; maxPrice: string }>({
  key: 'searchParamsState',
  default: { title: '', categories: [], minPrice: '', maxPrice: '' },
});
