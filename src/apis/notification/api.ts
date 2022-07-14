import axios from 'axios';

export const getNotifications = async () => {
  return axios.get('/api/notifications').then((res) => res.data);
};
