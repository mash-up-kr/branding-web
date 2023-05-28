import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '../styles';
import { theme } from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
