import { Meta, Story } from '@storybook/react';
import Temperature, { TemperatureProps } from './Temperature';

export default {
  title: 'Atoms/Temperature',
  component: Temperature,
} as Meta;

const Template: Story<TemperatureProps> = (args) => (
  <>
    <Temperature {...args} />
  </>
);

export const ProductLow = Template.bind({});
ProductLow.args = {
  degree: 36.8,
  type: 'product',
};

export const ProductMiddle = Template.bind({});
ProductMiddle.args = {
  degree: 37.9,
  type: 'product',
};

export const ProductHigh = Template.bind({});
ProductHigh.args = {
  degree: 51.2,
  type: 'product',
};

export const UserLow = Template.bind({});
UserLow.args = {
  degree: 36.8,
  type: 'user',
};

export const UserMiddle = Template.bind({});
UserMiddle.args = {
  degree: 37.9,
  type: 'user',
};
export const UserHigh = Template.bind({});
UserHigh.args = {
  degree: 51.2,
  type: 'user',
};
