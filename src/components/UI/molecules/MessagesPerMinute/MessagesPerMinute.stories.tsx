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
  chats: [
    {
      sender: 'me',
      message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
      createdAt: new Date(),
    },
    {
      sender: 'me',
      message: '다음 번에 꼭 같이 거래해요~!',
      createdAt: new Date(),
    },
  ],
};

export const You = Template.bind({});
You.args = {
  chats: [
    {
      sender: 'you',
      message: '아 이미 구매했어요 ㅠㅠ 죄송합니당 ㅜㅜㅜㅜ',
      createdAt: new Date(),
    },
    {
      sender: 'you',
      message: '다음 번에 꼭 같이 거래해요~!',
      createdAt: new Date(),
    },
  ],
};
