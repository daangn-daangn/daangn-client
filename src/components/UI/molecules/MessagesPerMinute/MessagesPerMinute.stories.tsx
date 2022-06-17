import { Meta, Story } from '@storybook/react';
import MessagesPerMinute, { MessagesPerMinuteProps } from './MessagesPerMinute';

export default {
  title: 'Molecules/MessagesPerMinute',
  component: MessagesPerMinute,
} as Meta;

const Template: Story<MessagesPerMinuteProps> = (args) => (
  <>
    <MessagesPerMinute {...args}></MessagesPerMinute>
  </>
);

export const Me = Template.bind({});
Me.args = {
  chats: {
    '03:24': [
      {
        sender: 'me',
        message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
        message_type: 'text',
        createdAt: new Date(),
      },
    ],
  },
};

export const You = Template.bind({});
You.args = {
  chats: {
    '03:24': [
      {
        sender: 'you',
        message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
        message_type: 'text',
        createdAt: new Date(),
      },
    ],
  },
};
