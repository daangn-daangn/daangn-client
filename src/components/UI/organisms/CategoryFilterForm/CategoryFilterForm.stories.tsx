import { Meta, Story } from '@storybook/react';
import CategoryFilterForm, { CategoryFilterFormProps } from './CategoryFilterForm';

export default {
  title: 'Organisms/CategoryFilterForm',
  component: CategoryFilterForm,
} as Meta;

const Template: Story<CategoryFilterFormProps> = (args) => (
  <>
    <CategoryFilterForm {...args}></CategoryFilterForm>
  </>
);

export const Default = Template.bind({});
Default.args = {};
