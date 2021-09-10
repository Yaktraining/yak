import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../components/theme';
import Head from '../components/Head';

const MyApp = ({ Component, props }) => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Head title="test" description="test" />
      <Component {...props} />
    </ThemeProvider>
  </>
);

export default MyApp;
