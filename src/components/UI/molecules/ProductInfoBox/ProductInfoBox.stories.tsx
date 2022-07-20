import { Meta, Story } from '@storybook/react';
import { ProductState } from 'interfaces/Product.interface';
import { dummyProductInfoBox } from 'pages/Chat/ChatRoomPage/ChatRoomPage';
import ProductInfoBox, { ProductInfoBoxProps } from './ProductInfoBox';

export default {
  title: 'Molecules/ProductInfoBox',
  component: ProductInfoBox,
} as Meta;

const Template: Story<ProductInfoBoxProps> = (args) => (
  <>
    <ProductInfoBox {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  product: dummyProductInfoBox,
};
