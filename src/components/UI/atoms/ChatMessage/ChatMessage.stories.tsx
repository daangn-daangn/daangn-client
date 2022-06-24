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

export const Text = Template.bind({});
Text.args = {
  chat: {
    sender: 'me',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    message_type: 'text',
    createdAt: new Date(),
  },
  isShowImage: false,
};

export const Image = Template.bind({});
Image.args = {
  chat: {
    sender: 'you',
    message: 'http://ccimg.hellomarket.com/images/2019/item/04/16/15/0725_2265814_1.jpg?size=s6',
    message_type: 'image',
    createdAt: new Date(),
  },
  isShowImage: true,
};

export const Location = Template.bind({});
Location.args = {
  chat: {
    sender: 'you',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    message_type: 'location',
    createdAt: new Date(),
  },
  isShowImage: true,
};

export const Me = Template.bind({});
Me.args = {
  chat: {
    sender: 'me',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    message_type: 'text',
    createdAt: new Date(),
  },
  isShowImage: false,
};

export const You = Template.bind({});
You.args = {
  chat: {
    sender: 'you',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    message_type: 'text',
    createdAt: new Date(),
  },
  isShowImage: true,
};

export const MeWithTime = Template.bind({});
MeWithTime.args = {
  chat: {
    sender: 'me',
    message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
    message_type: 'text',
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
    message_type: 'text',
    createdAt: new Date(),
  },
  minute: true,
  isShowImage: true,
};
