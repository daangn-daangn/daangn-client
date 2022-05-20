import { Meta, Story } from '@storybook/react';
import Time, { TimeProps } from './Time';

export default {
  title: 'Atoms/Time',
  component: Time,
} as Meta;

const Template: Story<TimeProps> = (args) => (
  <>
    <Time {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  time: new Date(),
};

export const ExactTime = Template.bind({});
ExactTime.args = {
  time: new Date(),
  exactTime: true,
};
