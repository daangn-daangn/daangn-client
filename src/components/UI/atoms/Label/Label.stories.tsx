import { Meta, Story } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => (
  <>
    <Label {...args}></Label>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: '닉네임',
};
