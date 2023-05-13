import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </>
);

export default MyApp;
