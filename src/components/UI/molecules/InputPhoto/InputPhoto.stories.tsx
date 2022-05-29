import { Meta, Story } from '@storybook/react';
import InputPhoto, { InputPhotoProps } from './InputPhoto';

export default {
  title: 'Molecules/InputPhoto',
  component: InputPhoto,
} as Meta;

const Template: Story<InputPhotoProps> = (args) => (
  <>
    <InputPhoto {...args}></InputPhoto>
  </>
);

export const Default = Template.bind({});
Default.args = {
  buttonNode: <>버튼 모양!</>,
};
