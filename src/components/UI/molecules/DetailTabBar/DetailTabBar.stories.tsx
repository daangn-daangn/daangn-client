import { Meta, Story } from "@storybook/react";
import DetailTabBar, { DetailTabBarProps } from "./DetailTabBar";

export default {
  title: 'Molecules/DetailTabBar',
  component: DetailTabBar,
} as Meta;

const Template: Story<DetailTabBarProps> = (args) => (
  <>
    <DetailTabBar {...args}></DetailTabBar>
  </>
);

export const Default = Template.bind({});
Default.args = {
};