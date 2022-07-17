import { Global } from '@emotion/react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import Theme from '../src/styles/Theme';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <Global styles={GlobalStyle} />
          <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  ),
];
