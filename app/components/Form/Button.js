import styled from 'styled-components';

const Button = styled.button`
  width: 178px;
  height: 42px;
  border-radius: 4px;
  background-color: ${props => props.theme.blueColor};
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.53px;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
