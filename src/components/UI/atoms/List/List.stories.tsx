import { Meta, Story } from '@storybook/react';
import List, { ListProps } from './List';

export default {
  title: 'Atoms/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => (
  <>
    <List {...args}>하이</List>
  </>
);

export const Default = Template.bind({});
Default.args = {};
