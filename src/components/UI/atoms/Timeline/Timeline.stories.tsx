import { Meta, Story } from '@storybook/react';
import Timeline, { TimelineProps } from './Timeline';

export default {
  title: 'Atoms/Timeline',
  component: Timeline,
} as Meta;

const Template: Story<TimelineProps> = (args) => (
  <>
    <Timeline {...args}></Timeline>
  </>
);

export const Default = Template.bind({});
Default.args = {
  time: '2022년 12월 2일',
};
