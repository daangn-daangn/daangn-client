import { Meta, Story } from '@storybook/react';
import NavStateBar, { NavStateBarProps } from './NavStateBar';

export default {
  title: 'Molecules/NavStateBar',
  component: NavStateBar,
} as Meta;

const Template: Story<NavStateBarProps> = (args) => (
  <>
    <div style={{ width: '375px' }}>
      <NavStateBar {...args}></NavStateBar>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  states: [
    { menu: '판매중', onClick: () => console.log('판매중') },
    { menu: '거래완료', onClick: () => console.log('거래완료') },
    { menu: '숨김', onClick: () => console.log('숨김') },
  ],
};
