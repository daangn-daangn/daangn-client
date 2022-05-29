import { Meta, Story } from '@storybook/react';
import { ProductState } from 'interfaces/Product.interface';
import ProductStateChangeButton, { ProductStateChangeButtonProps } from './ProductStateChangeButton';

export default {
  title: 'Organisms/ProductStateChangeButton',
  component: ProductStateChangeButton,
} as Meta;

const Template: Story<ProductStateChangeButtonProps> = (args) => (
  <>
    <ProductStateChangeButton {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  productState: ProductState.FOR_SALE,
};
