import { Meta, Story } from '@storybook/react';
import TextArea, { TextAreaProps } from './TextArea';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => (
  <>
    <TextArea {...args}></TextArea>
  </>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: '메시지를 입력하세요.',
};
