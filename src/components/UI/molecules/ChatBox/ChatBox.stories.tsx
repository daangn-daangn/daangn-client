import { Meta, Story } from '@storybook/react';
import { dummyGetChat } from 'interfaces/Chat.interface';
import ChatBox, { ChatBoxProps } from './ChatBox';

export default {
  title: 'Molecules/ChatBox',
  component: ChatBox,
  parameters: {
    layout: 'fullScreen',
  },
} as Meta;

const Template: Story<ChatBoxProps> = (args) => (
  <>
    <ChatBox {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  chat: dummyGetChat,
};
