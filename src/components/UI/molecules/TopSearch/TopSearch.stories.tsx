import { Meta, Story } from '@storybook/react';
import TopSearch, { TopSearchProps } from './TopSearch';

export default {
  title: 'Molecules/TopSearch',
  component: TopSearch,
} as Meta;

const Template: Story<TopSearchProps> = (args) => (
  <>
    <TopSearch {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
