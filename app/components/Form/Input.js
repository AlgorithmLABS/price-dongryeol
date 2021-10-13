import styled from 'styled-components';

const Input = styled.input`
  width: 128px;
  height: 34px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #fff;
  padding-left: 22px;
  &::placeholder {
    opacity: 0.4;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #304156;
  }
`;

export default Input;
