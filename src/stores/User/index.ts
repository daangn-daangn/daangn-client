import { atom, selector } from 'recoil';

export const nicknameState = atom({
  key: 'nicknameState',
  default: '',
});

export const userLocationState = atom<{ latitude: number; longitude: number }>({
  key: 'userLocationState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});
