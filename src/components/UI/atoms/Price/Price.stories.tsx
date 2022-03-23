import { Meta, Story } from '@storybook/react';
import Price, { PriceProps } from './Price';

export default {
  title: 'Atoms/Price',
  component: Price,
} as Meta;

const Template: Story<PriceProps> = (args) => (
  <>
    <Price {...args}></Price>
  </>
);

export const Default = Template.bind({});
Default.args = {
  productPrice: 300000,
};
