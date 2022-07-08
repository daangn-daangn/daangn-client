import { atom } from 'recoil';

export const searchParamsTitle = atom<string>({
  key: 'searchParamsTitleState',
  default: '',
});

export const searchParamsCategories = atom<number[]>({
  key: 'searchParamsCategoriesState',
  default: [],
});

export const searchParamsMinPrice = atom<string>({
  key: 'searchParamsMinPriceState',
  default: '',
});

export const searchParamsMaxPrice = atom<string>({
  key: 'searchParamsMaxPriceState',
  default: '',
});
