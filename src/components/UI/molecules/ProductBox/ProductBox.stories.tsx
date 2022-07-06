import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProductBox, { ProductBoxProps } from './ProductBox';
import { dummyProduct } from 'pages/Home/HomePage/HomePage';

export default {
  title: 'Molecules/ProductBox',
  component: ProductBox,
} as Meta;

const Template: Story<ProductBoxProps> = (args) => (
  <>
    <div style={{ width: '375px' }}>
      <ProductBox {...args}></ProductBox>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  product: dummyProduct,
};
