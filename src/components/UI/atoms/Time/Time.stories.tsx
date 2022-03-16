import React from 'react';
import { Meta, Story } from '@storybook/react';
import Time, { TimeProps } from './Time';

export default {
  title: 'Atoms/Time',
  component: Time,
} as Meta;

const Template: Story<TimeProps> = (args) => (
  <>
    <Time {...args}>삼성갤럭시폰 교환해요</Time>
  </>
);

export const Default = Template.bind({});
Default.args = {
  time: new Date(),
};
