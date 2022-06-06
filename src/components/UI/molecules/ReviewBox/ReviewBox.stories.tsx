import { Meta, Story } from '@storybook/react';
import ReviewBox, { ReviewBoxProps, dummyReview } from './ReviewBox';

export default {
  title: 'Molecules/ReviewBox',
  component: ReviewBox,
} as Meta;

const Template: Story<ReviewBoxProps> = (args) => (
  <>
    <ReviewBox {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  review: dummyReview,
};
