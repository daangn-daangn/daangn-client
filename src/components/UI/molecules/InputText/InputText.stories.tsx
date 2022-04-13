import { Meta, Story } from '@storybook/react';
import InputText, { InputTextProps } from './InputText';

export default {
  title: 'Molecules/InputText',
  component: InputText,
} as Meta;

const Template: Story<InputTextProps> = (args) => (
  <>
    <InputText {...args}></InputText>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: '닉네임',
};
