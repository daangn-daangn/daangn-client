import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args}>채팅으로 거래하기</Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
};