import { Meta, Story } from '@storybook/react';
import Top, { TopProps } from './Top';

export default {
  title: 'Molecules/Top',
  component: Top,
} as Meta;

const Template: Story<TopProps> = (args) => (
  <>
    <Top {...args} />
  </>
);

export const isPrevArrowTrue = Template.bind({});
isPrevArrowTrue.args = {
  isPrevArrow: true,
  title: '프로필 설정',
};

export const isPrevArrowFalse = Template.bind({});
isPrevArrowFalse.args = {
  isPrevArrow: false,
  title: '프로필 설정',
};
