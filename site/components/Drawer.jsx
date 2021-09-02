import React from 'react';
import PropTypes from 'prop-types';
import MuiDrawer from '@mui/material/Drawer';

const Drawer = ({ children, ...props }) => (
  <MuiDrawer
    {...props}
  >
    {children}
  </MuiDrawer>
);

Drawer.propTypes = {
  children: PropTypes.node,
};

Drawer.defaultProps = {
  children: null,
};

export default Drawer;
