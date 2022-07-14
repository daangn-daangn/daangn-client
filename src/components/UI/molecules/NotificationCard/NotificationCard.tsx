import Image from '@atoms/Image/Image';
import Price from '@atoms/Price/Price';
import Time from '@atoms/Time/Time';
import useNotificationRead from 'hooks/queries/notification/useNotificationRead';
import { INotiCodeZero, NotificationType } from 'interfaces/Notification.interface';
import { StyledNotificationCard } from './NotificationCardStyled';

export interface NotificationCardProps {
  notification: NotificationType;
}

const NotificationCard = ({ notification }: NotificationCardProps) => {
  const mutattion = useNotificationRead();
  const onClickNotiCard = () => {
    console.log(notification.id);
    // mutattion.mutate({ notificationId: notification.id });
  };
  return (
    <StyledNotificationCard onClick={onClickNotiCard}>
      {notification.noti_code == 0 && (
        <>
          <Image width="40px" height="40px" borderRedius="50%" imgUrl={notification.thumb_nail_image} />
          <div className="noti_detail">
            <div>{notification.title} 상품의 거래가 완료되었어요!</div>
            <Time time={notification.created_at} />
          </div>
        </>
      )}
      {notification.noti_code == 1 && (
        <>
          <Image width="40px" height="40px" borderRedius="50%" imgUrl={notification.thumb_nail_image} />
          <div className="noti_detail">
            <div>
              {notification.title} 상품의 가격이 <Price productPrice={notification.price} />
              으로 변경됐어요!
            </div>
            <Time time={notification.created_at} />
          </div>
        </>
      )}
      {notification.noti_code == 2 && (
        <>
          <Image width="40px" height="40px" borderRedius="50%" imgUrl={notification.thumb_nail_image} />
          <div className="noti_detail">
            <div>{notification.title} 상품의 거래가 완료되었어요!</div>
            <Time time={notification.created_at} />
          </div>
        </>
      )}
      {notification.noti_code == 3 && (
        <>
          <Image width="40px" height="40px" borderRedius="50%" imgUrl={notification.profile_url} />
          <div className="noti_detail">
            <div>{notification.nickname}님이 구매후기를 남겼어요!</div>
            <Time time={notification.created_at} />
          </div>
        </>
      )}
    </StyledNotificationCard>
  );
};

export default NotificationCard;
