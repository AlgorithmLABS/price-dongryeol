import React from 'react';

import styled from 'styled-components';
import NavItem from '../NavItem';
import HomeIcon from './icon/home.png';

const NavContainer = styled.nav`
  width: 100%;
  height: 56px;
  padding-left: 85px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #f0f1f2;
`;

function Nav() {
  const navList = [{ icon: HomeIcon, name: 'Prediction', path: '/' }];
  return (
    <NavContainer>
      {navList.map(nav => (
        <NavItem key={nav.name} {...nav} />
      ))}
    </NavContainer>
  );
}

export default Nav;
