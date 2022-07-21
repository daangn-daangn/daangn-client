import { Meta, Story } from '@storybook/react';
import { PRODUCT_DEFAULT_IMAGE } from 'constants/defaultImages';
import { dummyProduct } from 'pages/Home/HomePage/HomePage';
import NotificationCard, { NotificationCardProps } from './NotificationCard';

export default {
  title: 'Molecules/NotificationCard',
  component: NotificationCard,
} as Meta;

const Template: Story<NotificationCardProps> = (args) => (
  <>
    <div style={{ width: '375px' }}>
      <NotificationCard {...args}></NotificationCard>
    </div>
  </>
);

export const NotiCode_Zero = Template.bind({});
NotiCode_Zero.args = {
  notification: {
    id: 1,
    created_at: new Date(),
    view: false,
    noti_code: 0,
    noti_type: '찜한 상품이 거래 완료된 경우',
    product_id: 1,
    price: null,
    title: 'TEST',
    thumb_nail_image: PRODUCT_DEFAULT_IMAGE,
    reviewer_id: null,
    nickname: null,
    profile_url: null,
  },
};

export const NotiCode_One = Template.bind({});
NotiCode_One.args = {
  notification: {
    id: 1,
    created_at: new Date(),
    view: false,
    noti_code: 1,
    noti_type: '찜한 상품의 가격이 낮아진 경우',
    product_id: 1,
    price: 20000,
    title: 'TEST',
    thumb_nail_image: PRODUCT_DEFAULT_IMAGE,
    reviewer_id: null,
    nickname: null,
    profile_url: null,
  },
};

export const NotiCode_Two = Template.bind({});
NotiCode_Two.args = {
  notification: {
    id: 1,
    created_at: new Date(),
    view: false,
    noti_code: 2,
    noti_type: '판매자가 판매완료로 상태를 변경한 경우',
    product_id: 1,
    price: null,
    title: 'TEST',
    thumb_nail_image: PRODUCT_DEFAULT_IMAGE,
    reviewer_id: null,
    nickname: null,
    profile_url: null,
  },
};

export const NotiCode_Three = Template.bind({});
NotiCode_Three.args = {
  notification: {
    id: 1,
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
    profile_url: PRODUCT_DEFAULT_IMAGE,
  },
};
