import { Meta, Story } from '@storybook/react';
import ChatSendBox, { ChatSendBoxProps } from './ChatSendBox';

export default {
  title: 'Molecules/ChatSendBox',
  component: ChatSendBox,
} as Meta;

const Template: Story<ChatSendBoxProps> = (args) => (
  <>
    <ChatSendBox {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
