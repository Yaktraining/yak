import React from 'react';
import MuiTypography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Typography = ({
  align,
  children,
  tag,
  className,
  noWrap,
  variant,
  color,
}) => (
  <MuiTypography
    align={align}
    component={tag}
    className={className}
    noWrap={noWrap}
    variant={variant}
    color={color}
  >
    {children}
  </MuiTypography>
);

Typography.defaultProps = {
  align: 'inherit',
  children: null,
  tag: 'div',
  className: null,
  variant: 'inherit',
  noWrap: false,
  color: 'textPrimary',
};

Typography.propTypes = {
  /** Set the text-align on the component */
  align: PropTypes.string,
  /** Sets the content */
  children: PropTypes.node,
  /** Change the default html tag */
  tag: PropTypes.string,
  /** Sets the classname */
  className: PropTypes.string,
  /**  Truncate with a text overflow ellipsis */
  noWrap: PropTypes.bool,
  /**  Applies the theme typography styles * */
  variant: PropTypes.string,
  /**  The color of the component * */
  color: PropTypes.string,
};

export default Typography;
