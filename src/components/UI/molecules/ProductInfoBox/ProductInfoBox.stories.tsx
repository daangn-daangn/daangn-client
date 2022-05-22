import { Meta, Story } from '@storybook/react';
import { ProductState } from 'interfaces/Product.interface';
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
  product: {
    id: 1,
    title: '아이폰 팔아요',
    thumb_nail_image:
      'https://dnvefa72aowie.cloudfront.net/origin/article/202201/300ec7e016841850b703e391d7b276f9198c54e7075a32df5a80b6fdd8563a6b.webp?q=82&s=300x300&t=crop',
    price: 300000,
    state: ProductState.FOR_SALE,
  },
};
