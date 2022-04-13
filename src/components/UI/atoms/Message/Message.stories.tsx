import { Meta, Story } from '@storybook/react';
import Message, { MessageProps } from './Message';

export default {
  title: 'Atoms/Message',
  component: Message,
} as Meta;

const Template: Story<MessageProps> = (args) => (
  <>
    <Message {...args}></Message>
  </>
);

export const Default = Template.bind({});
Default.args = {
  message: '닉네임을 입력해주세요.',
};
