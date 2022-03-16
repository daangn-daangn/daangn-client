import React from 'react';
import { Meta, Story } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => (
  <>
    <Title {...args}>삼성갤럭시폰 교환해요</Title>
  </>
);

export const Default = Template.bind({});
Default.args = {};
