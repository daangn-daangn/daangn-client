import { Meta, Story } from "@storybook/react";
import NavBar, { NavBarProps } from "./NavBar";

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
} as Meta;

const Template: Story<NavBarProps> = (args) => (
  <>
    <NavBar {...args} />
  </>
);

export const Home = Template.bind({});
Home.args = {
  type: '홈',
  location: '고잔동',
};

export const Chatting = Template.bind({});
Chatting.args = {
  type: '채팅',
};

export const Profile = Template.bind({});
Profile.args = {
  type: '나의 당근',
};