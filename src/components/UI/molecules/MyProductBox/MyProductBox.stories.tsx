import { Meta, Story } from '@storybook/react';
import { dummyProduct } from 'pages/Home/HomePage/HomePage';
import MyProductBox, { MyProductBoxProps } from './MyProductBox';

export default {
  title: 'Molecules/MyProductBox',
  component: MyProductBox,
} as Meta;

const Template: Story<MyProductBoxProps> = (args) => (
  <>
    <div style={{ width: '375px' }}>
      <MyProductBox {...args}></MyProductBox>
    </div>
  </>
);

export const Sell_Ing = Template.bind({});
Sell_Ing.args = {
  type: 'sell',
  product: dummyProduct,
  stateSelects: [
    { content: '끌어올리기', function: () => console.log('끌어올리기') },
    { content: '예약중', function: () => console.log('예약중') },
    { content: '거래완료', function: () => console.log('거래완료') },
  ],
  moreSelects: [
    { content: '게시물 수정', function: () => console.log('게시물 수정') },
    { content: '숨기기', function: () => console.log('숨기기') },
    { content: '삭제', function: () => console.log('삭제') },
  ],
};

export const Sell_Done = Template.bind({});
Sell_Done.args = {
  type: 'sell',
  product: dummyProduct,
  stateSelects: [{ content: '후기 보내기', function: () => console.log('후기 보내기') }],
  moreSelects: [
    { content: '판매중', function: () => console.log('판매중') },
    { content: '게시글 수정', function: () => console.log('게시물 수정') },
    { content: '숨기기', function: () => console.log('숨기기') },
    { content: '삭제', function: () => console.log('삭제') },
  ],
};

export const Sell_Hide = Template.bind({});
Sell_Hide.args = {
  type: 'sell',
  product: dummyProduct,
  stateSelects: [{ content: '숨기기 해제', function: () => console.log('숨기기 해제') }],
  moreSelects: [
    { content: '게시글 수정', function: () => console.log('게시물 수정') },
    { content: '삭제', function: () => console.log('삭제') },
  ],
};

export const Buy_Review = Template.bind({});
Buy_Review.args = {
  type: 'buy',
  product: dummyProduct,
  stateSelects: [{ content: '작성한 후기 보기', function: () => console.log('작성한 후기 보기') }],
  moreSelects: [
    { content: '게시글 수정', function: () => console.log('게시물 수정') },
    { content: '삭제', function: () => console.log('삭제') },
  ],
};

export const Buy_NO_Review = Template.bind({});
Buy_NO_Review.args = {
  type: 'buy',
  product: dummyProduct,
  stateSelects: [{ content: '거래후기 남기기', function: () => console.log('거래후기 남기기') }],
  moreSelects: [
    { content: '게시글 수정', function: () => console.log('게시물 수정') },
    { content: '삭제', function: () => console.log('삭제') },
  ],
};

export const Like = Template.bind({});
Like.args = {
  type: 'like',
  product: dummyProduct,
};
