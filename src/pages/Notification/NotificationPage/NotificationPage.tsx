import Spinner from '@atoms/Spinner/Spinner';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import NotificationCard from '@molecules/NotificationCard/NotificationCard';
import Top from '@molecules/Top/Top';
import ErrorBoundary from 'components/ErrorBoundary';
import { ERROR_MSG } from 'constants/message';
import useNotificationsLoad from 'hooks/queries/notification/useNotificationsLoad';
import { NotificationCardGroup, NotificationPageStyled } from './NotificationPageStyled';

const NotificationPage = () => {
  const { data } = useNotificationsLoad();
  if (!data) {
    return <Spinner />;
  }
  return (
    <>
      <NotificationPageStyled>
        <Top left="prev" title="알림" />
        <NotificationCardGroup>
          <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_NOTIFICATIONS} />}>
            {data.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </ErrorBoundary>
        </NotificationCardGroup>
      </NotificationPageStyled>
    </>
  );
};

export default NotificationPage;
