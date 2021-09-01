import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer';

const StyledToolbar = styled(Toolbar)`
  && {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    flex-direction: row;
    box-shadow: none;
  }
`;

const Navigation = ({ links }) => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledAppBar position='static'>
      <StyledIconButton
        onClick={handleDrawer}
        color="inherit"
      >
        <MenuIcon />
      </StyledIconButton>
      <StyledToolbar>
        <Drawer open={open} onClose={handleClose}>
          {links}
        </Drawer>
        {links}
      </StyledToolbar>
    </StyledAppBar>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
};

Navigation.defaultProps = {
  links: null,
};

export default Navigation;
