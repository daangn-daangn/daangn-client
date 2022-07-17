import { Meta, Story } from '@storybook/react';
import SellerBox, { SellerBoxProps } from './SellerBox';

export default {
  title: 'Molecules/SellerBox',
  component: SellerBox,
} as Meta;

const Template: Story<SellerBoxProps> = (args) => (
  <>
    <SellerBox {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  sellerDetail: {
    nickname: '유키링',
    profile_url:
      'https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg',
    location: '하라주쿠',
    manner: 38.6,
  },
};
