import { Meta, Story } from '@storybook/react';
import Spinner from './Spinner';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
} as Meta;

const Template: Story = (args) => (
  <>
    <div>
      <Spinner {...args}></Spinner>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {};
