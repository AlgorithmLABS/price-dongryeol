import styled from 'styled-components';

const Circle = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${props => (props.bgColor ? props.bgColor : '#828d99')};
  margin-right: 10px;
`;

export default Circle;
