import { Meta, Story } from "@storybook/react";
import SlideButton, { SlideButtonProps } from "./SlideButton";

export default {
  title: 'Atoms/SlideButton',
  component: SlideButton,
} as Meta;

const Template: Story<SlideButtonProps> = (args) => (
  <>
    <SlideButton {...args}></SlideButton>
  </>
);

export const Previous = Template.bind({});
Previous.args = {
  direction: "previous",
};

export const Next = Template.bind({});
Next.args = {
  direction: "next",
};