import React from 'react';
import { Navigation } from './Navigation';

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
    <footer>footer</footer>
  </>
);

export default Layout;
