import React from 'react';
import { Meta, Story } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => (
  <>
    <Image {...args}></Image>
  </>
);

export const Default = Template.bind({});
Default.args = {
  imgUrl:
    'https://dnvefa72aowie.cloudfront.net/origin/article/202203/3D49F1C21F7DED5C050174BC158383C8FFF4FD9CE94BBDB80C950F4E9266308D.jpg?q=82&s=300x300&t=crop',
};

export const withContent = Template.bind({});
withContent.args = {
  imgUrl:
    'https://dnvefa72aowie.cloudfront.net/origin/article/202203/3D49F1C21F7DED5C050174BC158383C8FFF4FD9CE94BBDB80C950F4E9266308D.jpg?q=82&s=300x300&t=crop',
  innerContent: '+3',
};
