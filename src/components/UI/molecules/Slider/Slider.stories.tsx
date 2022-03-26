import { Meta, Story } from "@storybook/react";
import Slider, { SliderProps } from "./Slider";

export default {
  title: 'Molecules/Slider',
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <>
    <Slider {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  slides: {
    images: ["https://play-lh.googleusercontent.com/6Adeoocj4FktXRmkcFY8j6sknDBK_eoCjsMv6EPJI_ZLhLUeAmZH_r5QxKBBa8xoxgni", "https://img.pixers.pics/pho(s3:700/PI/23/28/700_PI2328_929d479296b1a4e351ad083979e06dca_5b7aba17b76ce_.,700,700,jpg)/shower-curtains-hello-kitty.jpg.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3he9XCrjKds0D-MuWkEmH9NEk3NjxMBqZTOgXwSBT4DZu2RX6-T-ZNFfEXtnIHnMuuCQ&usqp=CAU"],
  },
};
