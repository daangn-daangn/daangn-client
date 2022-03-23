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

export const UserLikeTrue = Template.bind({});
UserLikeTrue.args = {
  isLike: true,
  productPrice: 6000,
};

export const UserLikeFalse = Template.bind({});
UserLikeFalse.args = {
  isLike: false,
  productPrice: 6000,
};
