import styled from 'styled-components';

const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.color};
  margin-right: 10px;
`;

export default Circle;
