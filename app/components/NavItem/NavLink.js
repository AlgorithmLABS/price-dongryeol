import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  height: 100%;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${props => props.theme.blueColor};
`;

export default NavLink;
