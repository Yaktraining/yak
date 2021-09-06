import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme';
import Head from '../components/Head';

const MyApp = ({ Component, props }) => (
  <>
    <ThemeProvider theme={theme}>
      <Head />
      <Component {...props} />
    </ThemeProvider>
  </>
);

export default MyApp;