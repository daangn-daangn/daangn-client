import { Meta, Story } from '@storybook/react';
import { ProductState } from 'interfaces/Product.interface';
import DetailBox, { DetailBoxProps } from './DetailBox';

export default {
  title: 'Organisms/DetailBox',
  component: DetailBox,
} as Meta;

const Template: Story<DetailBoxProps> = (args) => (
  <>
    <DetailBox {...args} />
  </>
);

export const MyProduct = Template.bind({});
MyProduct.args = {
  slides: {
    product_images: [
      'https://play-lh.googleusercontent.com/6Adeoocj4FktXRmkcFY8j6sknDBK_eoCjsMv6EPJI_ZLhLUeAmZH_r5QxKBBa8xoxgni',
      'https://img.pixers.pics/pho(s3:700/PI/23/28/700_PI2328_929d479296b1a4e351ad083979e06dca_5b7aba17b76ce_.,700,700,jpg)/shower-curtains-hello-kitty.jpg.jpg',
      'https://img.insight.co.kr/static/2016/02/15/700/yy1275us791rlld79jxb.jpg',
    ],
  },
  // sellerDetail: {
  //   nickname: '유키링',
  //   profile_url:
  //     'https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg',
  //   location: '하라주쿠',
  //   manner: 38.6,
  // },
  productDetail: {
    id: 1,
    title: '아이폰 삽니다',
    category_id: 1,
    description: '원가 18,900갤럭시로 갈아타면서 판매해요~ 한번도 사용안한 새상품입니다',
    created_at: new Date(),
    view_count: 256,
    favorite_count: 21,
    chatting_count: 4,
    product_state: ProductState.FOR_SALE,
  },
  isMyProduct: true,
};

export const Not_MyProduct = Template.bind({});
Not_MyProduct.args = {
  slides: {
    product_images: [
      'https://play-lh.googleusercontent.com/6Adeoocj4FktXRmkcFY8j6sknDBK_eoCjsMv6EPJI_ZLhLUeAmZH_r5QxKBBa8xoxgni',
      'https://img.pixers.pics/pho(s3:700/PI/23/28/700_PI2328_929d479296b1a4e351ad083979e06dca_5b7aba17b76ce_.,700,700,jpg)/shower-curtains-hello-kitty.jpg.jpg',
      'https://img.insight.co.kr/static/2016/02/15/700/yy1275us791rlld79jxb.jpg',
    ],
  },
  // sellerDetail: {
  //   nickname: '유키링',
  //   profile_url:
  //     'https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg',
  //   location: '하라주쿠',
  //   manner: 38.6,
  // },
  productDetail: {
    id: 1,
    title: '아이폰 삽니다',
    category_id: 1,
    description: '원가 18,900갤럭시로 갈아타면서 판매해요~ 한번도 사용안한 새상품입니다',
    created_at: new Date(),
    view_count: 256,
    favorite_count: 21,
    chatting_count: 4,
    product_state: ProductState.FOR_SALE,
  },
  isMyProduct: false,
};
