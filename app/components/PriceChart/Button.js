import styled from 'styled-components';

const Button = styled.button`
  padding: 5px 15px 2px;
  border-radius: 4px;
  background-color: ${props => props.theme.blueColor};
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: 0.43px;
  color: #fff;
`;

export default Button;
