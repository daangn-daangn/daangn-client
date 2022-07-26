import { Meta, Story } from '@storybook/react';
import ErrorFallback, { ErrorFallbackProps } from './ErrorFallback';

export default {
  title: 'Molecules/ErrorFallback',
  component: ErrorFallback,
} as Meta;

const Template: Story<ErrorFallbackProps> = (args) => (
  <>
    <ErrorFallback {...args}></ErrorFallback>
  </>
);

export const Default = Template.bind({});
Default.args = {
  message: '에러예용',
};
