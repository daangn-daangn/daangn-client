import { Meta, Story } from '@storybook/react';
import SlideIndex, { SlideIndexProps } from './SlideIndex';

export default {
  title: 'Atoms/SlideIndex',
  component: SlideIndex,
} as Meta;

const Template: Story<SlideIndexProps> = (args) => (
  <>
    <div>
      <SlideIndex {...args}></SlideIndex>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  totalSlides: 4,
  currentSlide: 1,
};
