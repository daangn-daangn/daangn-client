import Image from '@atoms/Image/Image';
import Price from '@atoms/Price/Price';
import Time from '@atoms/Time/Time';
import { PRODUCT_DEFAULT_IMAGE } from 'constants/defaultImages';
import QUERY_KEYS from 'constants/queryKeys';
import useNotificationRead from 'hooks/queries/notification/useNotificationRead';
import useMe from 'hooks/queries/user/useMe';
import { INotiCodeZero, NotificationType } from 'interfaces/Notification.interface';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { reviewUploadState } from 'stores/review';
import { StyledNotificationCard } from './NotificationCardStyled';

export interface NotificationCardProps {
  notification: NotificationType;
}

const NotificationCard = ({ notification }: NotificationCardProps) => {
  const navigate = useNavigate();
  const { data: me } = useMe({ refetchOnWindowFocus: false });
  const queryClient = useQueryClient();
  const setReviewUpload = useSetRecoilState(reviewUploadState);
  const mutattion = useNotificationRead({
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.NOTIFICATIONS);
      switch (notification.noti_code) {
        case 0:
          navigate(`/product/${notification.product_id}`);
          break;
        case 1:
          navigate(`/product/${notification.product_id}`);
          break;
        case 2:
          setReviewUpload({
            type: 'buyer',
            product_id: notification.product_id,
            seller_id: notification.reviewer_id,
          });
          navigate(`/review/give`);
          break;
        case 3:
          navigate(`/profile/${me?.id}/review`);
          break;
        default:
          break;
      }
    },
  });
  const onClickNotiCard = () => {
    mutattion.mutate({ notificationId: notification.id });
  };
  return (
    <StyledNotificationCard isRead={notification.view} onClick={onClickNotiCard}>
      {notification.noti_code == 0 && (
        <>
          <Image
            width="40px"
            height="40px"
            borderRedius="50%"
            imgUrl={notification.thumb_nail_image || PRODUCT_DEFAULT_IMAGE}
          />
          <div className="noti_detail">
            <div>?????? {notification.title} ????????? ????????? ??????????????????!</div>
            <Time time={notification.created_at} />
          </div>
        </>
      )}
      {notification.noti_code == 1 && (
        <>
          <Image
            width="40px"
            height="40px"
            borderRedius="50%"
            imgUrl={notification.thumb_nail_image || PRODUCT_DEFAULT_IMAGE}
          />
          <div className="noti_detail">
            <div>
              {notification.title} ????????? ????????? <Price productPrice={notification.price} />
              ?????? ???????????????!
            </div>
            <Time time={notification.created_at} />
          </div>
        </>
      )}
      {notification.noti_code == 2 && (
        <>
          <Image
            width="40px"
            height="40px"
            borderRedius="50%"
            imgUrl={notification.thumb_nail_image || PRODUCT_DEFAULT_IMAGE}
          />
          <div className="noti_detail">
            <div>{notification.title} ????????? ????????? ??????????????????. ??????????????? ???????????????!</div>
            <Time time={notification.created_at} />
          </div>
        </>
      )}
      {notification.noti_code == 3 && (
        <>
          <Image width="40px" height="40px" borderRedius="50%" imgUrl={notification.profile_url} />
          <div className="noti_detail">
            <div>{notification.nickname}?????? ??????????????? ????????????!</div>
            <Time time={notification.created_at} />
          </div>
        </>
      )}
    </StyledNotificationCard>
  );
};

export default NotificationCard;
