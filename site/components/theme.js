import { createTheme } from '@material-ui/core/styles';

const typeFaces = {
  secondary: 'Inter, sans-serif',
  primary: 'Open Sans, sans-serif',
};

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    h2: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    h3: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    h4: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    h5: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    h6: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    subtitle1: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    subtitle2: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    body1: {
      fontFamily: typeFaces.primary,
    },
    body2: {
      fontFamily: typeFaces.primary,
    },
    button: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    caption: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    overline: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
  },
  palette: {
    primary: {
      main: '#219653',
    },
    common: {
      black: '#18191A',
      white: '#ffffff',
    },
    secondary: {
      main: '#FF7A5A',
    },
  },
});

export default theme;