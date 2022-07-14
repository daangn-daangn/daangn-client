import { getNotifications } from 'apis/notification/api';
import QUERY_KEYS from 'constants/queryKeys';
import { NotificationType } from 'interfaces/Notification.interface';
import { useQuery } from 'react-query';

const useNotificationsLoad = () => {
  return useQuery<NotificationType[]>(QUERY_KEYS.NOTIFICATIONS, getNotifications);
};

export default useNotificationsLoad;
