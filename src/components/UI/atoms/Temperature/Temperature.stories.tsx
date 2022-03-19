import { Meta, Story } from '@storybook/react';
import Temperature, { TemperatureProps } from './Temperature';

export default {
  title: 'Atoms/Temperature',
  component: Temperature,
} as Meta;

const Template: Story<TemperatureProps> = (args) => (
  <>
    <Temperature {...args} />
  </>
);

export const Low = Template.bind({});
Low.args = {
  degree: 36.8,
};

export const Middle = Template.bind({});
Middle.args = {
  degree: 37.9,
};

export const High = Template.bind({});
High.args = {
  degree: 51.2,
};

