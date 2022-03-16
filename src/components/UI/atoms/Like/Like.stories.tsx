import React from 'react';
import { Meta, Story } from '@storybook/react';
import Like, { LikeProps } from './Like';

export default {
  title: 'Atoms/Like',
  component: Like,
} as Meta;

const Template: Story<LikeProps> = (args) => (
  <>
    <Like {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
