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

export const Default = Template.bind({});
Default.args = {
  isPrevArrow: true,
  title: '프로필 설정',
};
