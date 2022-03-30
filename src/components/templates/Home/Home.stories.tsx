import { Meta, Story } from '@storybook/react';
import Home, { dummyProducts, HomeProps } from './Home';

export default {
  title: 'Templates/Home',
  component: Home,
  parameters: {
    layout: 'fullScreen',
  },
} as Meta;

const Template: Story<HomeProps> = (args) => (
  <>
    <Home {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  products: dummyProducts,
};
