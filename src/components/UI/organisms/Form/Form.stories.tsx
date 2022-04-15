import { Meta, Story } from '@storybook/react';
import Form, { FormProps } from './Form';

export default {
  title: 'Organisms/Form',
  component: Form,
} as Meta;

const Template: Story<FormProps> = (args) => (
  <>
    <Form {...args}></Form>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: '닉네임',
  message: '닉네임을 입력해주세요.'
};
