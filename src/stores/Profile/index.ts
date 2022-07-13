import { atom } from 'recoil';

export const selectProductIdState = atom<number>({
  key: 'selectProductIdState',
  default: -1,
});
