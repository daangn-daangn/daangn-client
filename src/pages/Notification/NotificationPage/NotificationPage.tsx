import NotificationCard from '@molecules/NotificationCard/NotificationCard';
import Top from '@molecules/Top/Top';
import { NotificationType } from 'interfaces/Notification.interface';
import { dummyProduct } from 'pages/Home/HomePage/HomePage';
import { dummyUser } from 'pages/Product/ProductDetailPage/ProductDetailPage';

import { NotificationCardGroup, NotificationPageStyled } from './NotificationPageStyled';

const dummyNotifications: NotificationType[] = [
  {
    id: 1,
    created_at: new Date(),
    view: false,
    noti_code: 0,
    noti_type: '찜한 상품이 거래 완료된 경우',
    product_id: 1,
    price: null,
    title: 'TEST',
    thumb_nail_image: dummyProduct.thumb_nail_image,
    reviewer_id: null,
    nickname: null,
    profile_url: null,
  },
  {
    id: 2,
    created_at: new Date(),
    view: false,
    noti_code: 1,
    noti_type: '찜한 상품의 가격이 낮아진 경우',
    product_id: 1,
    price: 20000,
    title: 'TEST',
    thumb_nail_image: dummyProduct.thumb_nail_image,
    reviewer_id: null,
    nickname: null,
    profile_url: null,
  },
  {
    id: 3,
    created_at: new Date(),
    view: false,
    noti_code: 2,
    noti_type: '판매자가 판매완료로 상태를 변경한 경우',
    product_id: 1,
    price: null,
    title: 'TEST',
    thumb_nail_image: dummyProduct.thumb_nail_image,
    reviewer_id: null,
    nickname: null,
    profile_url: null,
  },
  {
    id: 4,
    created_at: new Date(),
    view: false,
    noti_code: 3,
    noti_type: '구매후기를 남긴 경우',
    product_id: null,
    price: null,
    title: null,
    thumb_nail_image: null,
    reviewer_id: 1,
    nickname: 'TEST',
    profile_url: dummyUser.profileUrl,
  },
];

const NotificationPage = () => {
  return (
    <>
      <NotificationPageStyled>
        <Top left="prev" title="알림" />
        <NotificationCardGroup>
          {dummyNotifications.map((notification, index) => (
            <NotificationCard key={Number(notification.created_at) + index} notification={notification} />
          ))}
        </NotificationCardGroup>
      </NotificationPageStyled>
    </>
  );
};

export default NotificationPage;
