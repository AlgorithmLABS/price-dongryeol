import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr 6fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'price modelInfo coefficient'
    'price validation validation';
  grid-gap: 26px;

  height: 100%;
`;

export default GridContainer;
