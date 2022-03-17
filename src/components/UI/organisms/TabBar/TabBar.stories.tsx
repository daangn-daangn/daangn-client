import React from "react";
import { Meta, Story } from "@storybook/react";
import TabBar, { TabBarProps } from "./TabBar";

export default {
  title: 'Organisms/TabBar',
  component: TabBar,
} as Meta;

const Template: Story<TabBarProps> = (args) => (
  <>
    <TabBar {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
};

export const Home = Template.bind({});
Home.args = {
  curTab: 1,
};

export const Chatting = Template.bind({});
Chatting.args = {
  curTab: 2,
};

export const Profile = Template.bind({});
Profile.args = {
  curTab: 3,
};