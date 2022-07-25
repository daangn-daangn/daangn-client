import ReactDOM from 'react-dom';
import App from './App';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import Theme from './styles/Theme';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from 'components/ErrorBoundary';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

ReactDOM.render(
  <>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <Global styles={GlobalStyle} />
          <ErrorBoundary fallback={<ErrorFallback message="얘기치 못한 에러가 발생했어요!" />}>
            <App />
          </ErrorBoundary>
          <ToastContainer />
        </ThemeProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </>,
  document.getElementById('root'),
);
