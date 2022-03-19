import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProductBox, { ProductBoxProps } from './ProductBox';

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
  product: {
    id: 1,
    title: '아이폰 팔아요',
    imgUrl:
      'https://dnvefa72aowie.cloudfront.net/origin/article/202201/300ec7e016841850b703e391d7b276f9198c54e7075a32df5a80b6fdd8563a6b.webp?q=82&s=300x300&t=crop',
    location: '대연동',
    created_at: new Date(),
    price: 300000,
    likes: [1, 2, 3, 4, 5],
  },
};
