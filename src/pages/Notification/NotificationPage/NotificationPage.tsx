import Spinner from '@atoms/Spinner/Spinner';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import NotificationCard from '@molecules/NotificationCard/NotificationCard';
import Top from '@molecules/Top/Top';
import ErrorBoundary from 'components/ErrorBoundary';
import { ERROR_MSG } from 'constants/message';
import useLogOut from 'hooks/common/useLogOut';
import useNotificationsLoad from 'hooks/queries/notification/useNotificationsLoad';
import { NotificationCardGroup, NotificationPageStyled } from './NotificationPageStyled';

const NotificationPage = () => {
  useLogOut();
  return (
    <>
      <NotificationPageStyled>
        <Top left="prev" title="알림" />
        <NotificationCardGroup>
          <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_NOTIFICATIONS} />}>
            <NotificationCardContaioner />
          </ErrorBoundary>
        </NotificationCardGroup>
      </NotificationPageStyled>
    </>
  );
};

const NotificationCardContaioner = () => {
  const { data: notifications } = useNotificationsLoad();
  return (
    <>
      {notifications?.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </>
  );
};

export default NotificationPage;
