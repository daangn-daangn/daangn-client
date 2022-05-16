import ReactDOM from 'react-dom';
import App from './App';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import Theme from './styles/Theme';

const queryClient = new QueryClient();

ReactDOM.render(
  <>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <Global styles={GlobalStyle} />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </>,
  document.getElementById('root'),
);
