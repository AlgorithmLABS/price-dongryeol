import React from 'react';
import PropTypes from 'prop-types';

import NavLink from './NavLink';
import Icon from './Icon';
import Text from './Text';

function NavItem({ icon, name, path }) {
  return (
    <NavLink to={path}>
      {icon && <Icon src={icon} />}
      <Text>{name}</Text>
    </NavLink>
  );
}

NavItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
