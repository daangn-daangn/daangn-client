import { Meta, Story } from '@storybook/react';
import DescriptionBox, { DescriptionBoxProps } from './DescriptionBox';

export default {
  title: 'Molecules/DescriptionBox',
  component: DescriptionBox,
} as Meta;

const Template: Story<DescriptionBoxProps> = (args) => (
  <>
    <DescriptionBox {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  productDetail: {
    title: '아이폰 삽니다',
    category: '디지털기기',
    description: '원가 18,900갤럭시로 갈아타면서 판매해요~ 한번도 사용안한 새상품입니다',
    created_at: new Date(),
    view: 256,
    favorite: 21,
    chat: 4,
  },
};
