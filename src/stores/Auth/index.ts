import { TOKEN_KEY } from 'constants/localstoregeKeys';
import { atom } from 'recoil';

const token = localStorage.getItem(TOKEN_KEY);

export const tokenState = atom({
  key: 'tokenState',
  default: token || '',
});

export const isLoggedState = atom({
  key: 'isLoggedState',
  default: Boolean(token),
});
