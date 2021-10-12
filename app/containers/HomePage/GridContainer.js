import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 3fr 1fr 2fr;
  grid-template-areas:
    'a b c'
    'a validation validation';
  grid-gap: 36px;
`;

export default GridContainer;
