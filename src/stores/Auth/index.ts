import { atom } from 'recoil';

export const TOKEN_KEY = 'daangn_token';

const token = localStorage.getItem(TOKEN_KEY);

export const tokenState = atom({
  key: 'tokenState',
  default: token || '',
});

export const isLoggedState = atom({
  key: 'isLoggedState',
  default: Boolean(token),
});
