import React from 'react';
import styled from '@emotion/styled';
import MuiButton from '@mui/material/Button';

const StyledMuiButton = styled(MuiButton)`
  ${(props) => props.reversed && `
    background-color: #fff;
    color: #D5573B;
  `
}
`;

const Button = ({ children, ...props }) => (
  <StyledMuiButton {...props}>
    {children}
  </StyledMuiButton>
);

export default Button;
