import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '../components/theme';
import Head from '../components/Head';
import GlobalStyles from '../components/GlobalStyles';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Head />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
