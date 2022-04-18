import { Meta, Story } from '@storybook/react';
import Map, { MapProps } from './Map';

export default {
  title: 'Molecules/Map',
  component: Map,
} as Meta;

const Template: Story<MapProps> = (args) => (
  <>
    <Map {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  latitude: 33.450701,
  longitude: 126.570667,
};
