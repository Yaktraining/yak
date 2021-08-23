import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({
  variant, children,
}) => {
  const Component = variant;
  return (
    <Component>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Typography;
