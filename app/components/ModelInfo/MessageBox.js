import styled from 'styled-components';

const MessageBox = styled.div`
  padding: 5%;
  position: relative;
  display: inline-block;
  width: 100%;
  background: #f0f1f2;
  border-radius: 3px;
  margin-bottom: 26px;
  &:after {
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    border: 0 solid transparent;
    border-top: 9px solid #f0f1f2;
    width: 15px;
    height: 30px;
    transform: rotate(45deg) translateY(50%);
  }
`;

export default MessageBox;
