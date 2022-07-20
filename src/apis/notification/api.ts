import axios from 'axios';

export interface PutNotificationReadParams {
  notificationId: number;
}

export const getNotifications = async () => {
  return axios
    .get('/api/notifications')
    .then((res) => res.data.response)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const putNotificationRead = async ({ notificationId }: PutNotificationReadParams) => {
  return axios.put(`/api/notifications/${notificationId}`).then((res) => res.data);
};
