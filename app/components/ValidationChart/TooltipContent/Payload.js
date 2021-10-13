import styled from 'styled-components';

const Payload = styled.span`
  display: inline-block
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #304156;
  & + & {
      margin-left: 10px;
  }
`;

export default Payload;
