import { Meta, Story } from "@storybook/react";
import PostButton, { PostButtonProps } from "./PostButton";

export default {
  title: 'Atoms/PostButton',
  component: PostButton,
} as Meta;

const Template: Story<PostButtonProps> = (args) => (
  <>
    <PostButton {...args}></PostButton>
  </>
);

export const Default = Template.bind({});
Default.args = {
};
