import { Meta, Story } from '@storybook/react';
import MessageContainer, { MessageContainerProps } from './MessageContainer';

export default {
  title: 'Organisms/MessageContainer',
  component: MessageContainer,
} as Meta;

const Template: Story<MessageContainerProps> = (args) => (
  <>
    <MessageContainer {...args}></MessageContainer>
  </>
);

export const Default = Template.bind({});
Default.args = {};
