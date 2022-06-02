import { Meta, Story } from '@storybook/react';
import ChatMessage, { ChatMessageProps } from './ChatMessage';

export default {
  title: 'Atoms/ChatMessage',
  component: ChatMessage,
} as Meta;

const Template: Story<ChatMessageProps> = (args) => (
  <>
    <ChatMessage {...args} />
  </>
);

export const Me = Template.bind({});
Me.args = {
  chat: {
    sender: 'me',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    createdAt: new Date(),
  },
  isShowImage: false,
};

export const You = Template.bind({});
You.args = {
  chat: {
    sender: 'you',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    createdAt: new Date(),
  },
  isShowImage: true,
};

export const MeWithTime = Template.bind({});
MeWithTime.args = {
  chat: {
    sender: 'me',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    createdAt: new Date(),
  },
  minute: true,
  isShowImage: false,
};

export const YouWithTime = Template.bind({});
YouWithTime.args = {
  chat: {
    sender: 'you',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    createdAt: new Date(),
  },
  minute: true,
  isShowImage: true,
};
