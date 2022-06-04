import { Meta, Story } from '@storybook/react';
import CheckBox, { CheckBoxProps } from './CheckBox';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as Meta;

const Template: Story<CheckBoxProps> = (args) => (
  <>
    <CheckBox {...args}>채팅으로 거래하기</CheckBox>
  </>
);

export const checkTrue = Template.bind({});
checkTrue.args = {
  text: 'test',
  isCheck: true,
};

export const checkFalse = Template.bind({});
checkFalse.args = {
  text: 'test',
  isCheck: false,
};
