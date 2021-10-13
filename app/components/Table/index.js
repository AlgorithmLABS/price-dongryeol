import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Th from './Th';
import Name from './Name';
import Spec from './Spec';
import Portion from './Portion';
import Circle from './Circle';

const TableContainer = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 22px;
`;

function Table({ feature }) {
  let keys = Object.keys(feature);
  if (keys.length === 0) keys = [null, null, null, null, null, null];
  const circleColor = ['#c99be4', '#fd4d7a', '#ffde00', '#73d500', '#0099fe'];
  return (
    <TableContainer>
      <colgroup>
        <col span="1" style={{ width: '60%' }} />
        <col span="1" style={{ width: '20%' }} />
        <col span="1" style={{ width: '20%' }} />
      </colgroup>
      <tr>
        <Th />
        <Th>SPEC</Th>
        <Th>PORTION</Th>
      </tr>
      {keys.map((key, i) => (
        <tr key={key}>
          <Name>
            <Circle bgColor={circleColor[i]} />
            {key === null ? '-' : key}
          </Name>
          <Spec>{key === null ? '-' : feature[key].SPEC}</Spec>
          <Portion>{key === null ? '-' : `$${feature[key].price}`}</Portion>
        </tr>
      ))}
    </TableContainer>
  );
}

Table.propTypes = {
  feature: PropTypes.object,
};

Table.defaultProps = {
  feature: {},
};

export default Table;
