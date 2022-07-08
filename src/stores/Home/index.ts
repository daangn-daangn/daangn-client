import { atom } from 'recoil';

export const searchParamsAtom = atom<{ [key: string]: string }>({
  key: 'searchParamsState',
  default: {},
});

export const searchParamsTitle = atom<string>({
  key: 'searchParamsTitleState',
  default: '',
});
