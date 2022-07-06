import { Meta, Story } from '@storybook/react';
import { dummyProducts } from 'pages/Home/HomePage/HomePage';
import ProductBoxes, { ProductBoxesProps } from './ProductBoxes';

export default {
  title: 'Organisms/ProductBoxes',
  component: ProductBoxes,
} as Meta;

const Template: Story<ProductBoxesProps> = (args) => (
  <>
    <ProductBoxes {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  products: dummyProducts,
};
