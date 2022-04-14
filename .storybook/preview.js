import { Global } from '@emotion/react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import Theme from '../src/styles/Theme';
import { MemoryRouter } from 'react-router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
    </ThemeProvider>
  ),
];
