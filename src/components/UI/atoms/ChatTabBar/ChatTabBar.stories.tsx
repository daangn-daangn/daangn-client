import { Meta, Story } from '@storybook/react';
import ChatTabBar, { ChatTabBarProps } from './ChatTabBar';

export default {
  title: 'Atoms/ChatTabBar',
  component: ChatTabBar,
} as Meta;

const Template: Story<ChatTabBarProps> = (args) => (
  <>
    <ChatTabBar {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  userDetail: {
    nickname: "유키링",
    manner: 38.6,
  },
};