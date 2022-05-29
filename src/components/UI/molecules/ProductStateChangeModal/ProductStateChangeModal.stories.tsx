import { Meta, Story } from '@storybook/react';
import { ProductState } from 'interfaces/Product.interface';
import ProductStateChangeModal, { ProductStateChangeModalProps } from './ProductStateChangeModal';

export default {
  title: 'Molecules/ProductStateChangeModal',
  component: ProductStateChangeModal,
} as Meta;

const Template: Story<ProductStateChangeModalProps> = (args) => (
  <>
    <ProductStateChangeModal {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
