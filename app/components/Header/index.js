import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoText from './LogoText';

const HeaderContainer = styled.header`
  width: 100%;
  height: 56px;
  padding: 0 24px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #f0f1f2;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoText>PRICE PREDICTION</LogoText>
      </Link>
    </HeaderContainer>
  );
}

export default Header;
