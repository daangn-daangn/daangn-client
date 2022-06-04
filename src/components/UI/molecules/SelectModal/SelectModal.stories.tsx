import { Meta, Story } from '@storybook/react';
import SelectModal, { SelectModalProps } from './SelectModal';

export default {
  title: 'Molecules/SelectModal',
  component: SelectModal,
} as Meta;

const Template: Story<SelectModalProps> = (args) => (
  <>
    <SelectModal {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  selects: [
    { content: '파일에서 선택', function: () => console.log('파일에서 선택') },
    { content: '프로필 사진 삭제', function: () => console.log('프로필 사진 삭제') },
  ],
};

export const withTitle = Template.bind({});
withTitle.args = {
  title: '제목입니당',
  selects: [
    { content: '파일에서 선택', function: () => console.log('파일에서 선택') },
    { content: '프로필 사진 삭제', function: () => console.log('프로필 사진 삭제') },
  ],
};
