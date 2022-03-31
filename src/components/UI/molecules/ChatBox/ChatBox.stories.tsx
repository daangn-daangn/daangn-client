import { Meta, Story } from '@storybook/react';
import ChatBox, { ChatBoxProps } from './ChatBox';

export default {
  title: 'Molecules/ChatBox',
  component: ChatBox,
  parameters: {
    layout: 'fullScreen',
  },
} as Meta;

const Template: Story<ChatBoxProps> = (args) => (
  <>
    <ChatBox {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  profileURL:
    'https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg',
  nickname: '당근이',
  location: '대연동',
  prev_chatTime: new Date(),
  thumb_nail_image:
    'https://dnvefa72aowie.cloudfront.net/origin/article/202201/300ec7e016841850b703e391d7b276f9198c54e7075a32df5a80b6fdd8563a6b.webp?q=82&s=300x300&t=crop',
  recent_chat: '아 이미 구매했어요 ㅜㅜㅜ 죄송합니다',
};
