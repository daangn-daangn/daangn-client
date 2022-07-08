import { Meta, Story } from '@storybook/react';
import { categoryList } from 'utils/categoryFilter';
import CategoryFilter, { CategoryFilterProps } from './CategoryFilter';

export default {
  title: 'Molecules/CategoryFilter',
  component: CategoryFilter,
} as Meta;

const Template: Story<CategoryFilterProps> = (args) => (
  <>
    <CategoryFilter {...args}></CategoryFilter>
  </>
);

export const Default = Template.bind({});
Default.args = {
  checkCategories: [categoryList[0], categoryList[9]],
};
