import styled from 'styled-components';

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  width: 22px;
  height: 22px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
`;

export default CloseButton;
