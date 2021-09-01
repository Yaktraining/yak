import React from 'react';
import Navigation from './Navigation';
import Typography from './Typography';

const links = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

const Layout = ({ children }) => (
  <>
    <Navigation
      links={links.map((link) => {
        const { name, href } = link;
        return (
          <Typography variant="subtitle2">
            {name}
          </Typography>
        );
      })}
    />
    {children}
    <footer>footer</footer>
  </>
);

export default Layout;
