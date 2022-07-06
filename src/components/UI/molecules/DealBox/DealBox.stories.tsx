import { Meta, Story } from '@storybook/react';
import DealBox, { DealBoxProps } from './DealBox';

export default {
  title: 'Molecules/DealBox',
  component: DealBox,
} as Meta;

const Template: Story<DealBoxProps> = (args) => (
  <>
    <DealBox {...args} />
  </>
);

export const UserLikeTrue_And_MyProduct = Template.bind({});
UserLikeTrue_And_MyProduct.args = {
  isFavorite: true,
  productPrice: 6000,
  isMyProduct: true,
  chatLength: 3,
};

export const UserLikeFalse_And_NotMyProduct = Template.bind({});
UserLikeFalse_And_NotMyProduct.args = {
  isFavorite: false,
  productPrice: 6000,
  isMyProduct: false,
  chatLength: 3,
};
