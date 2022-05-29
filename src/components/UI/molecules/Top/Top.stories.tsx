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

export const Prev = Template.bind({});
Prev.args = {
  left: 'prev',
  title: '프로필 설정',
};

export const Close = Template.bind({});
Close.args = {
  left: 'close',
  title: '프로필 설정',
};

export const None = Template.bind({});
None.args = {
  left: 'none',
  title: '프로필 설정',
};

export const Right = Template.bind({});
Right.args = {
  left: 'close',
  title: '프로필 설정',
  right: <button>버튼</button>,
};
