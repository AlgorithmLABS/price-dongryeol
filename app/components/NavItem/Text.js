import styled from 'styled-components';

const Text = styled.span`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: ${props => props.theme.blueColor};
`;

export default Text;
