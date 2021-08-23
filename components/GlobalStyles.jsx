import React from 'react';
import { Global, css } from '@emotion/react';

const styles = (props) => css`
  html {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  li {
    list-style-type: none;
    color: ${props.colors.black};
  }
  h1, h2, h3, h4, h5, h6, button {
    font-family: ${props.fonts.heading};
    color: ${props.colors.black}
  }
  p, span, div {
    font-family: ${props.fonts.body};
    color: ${props.colors.black}
  }
  a {
    text-decoration: none;
  }
  button {
    background-color: ${props.colors.primary};
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    color: ${props.colors.white};
    padding: 16px 32px;
    text-transform: uppercase;
  }
  body {
    background-color: ${props.colors.white};
  }
`;

const GlobalStyles = () => (
  <Global
    styles={styles}
  />
);

export default GlobalStyles;
