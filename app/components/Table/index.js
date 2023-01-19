import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Th from './Th';
import Name from './Name';
import Spec from './Spec';
import Portion from './Portion';
import Circle from './Circle';

const ScrollBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const TableContainer = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 22px;
`;

function Table({ feature, colors }) {
  return (
    <ScrollBox>
      <TableContainer>
        <colgroup>
          <col span="1" style={{ width: '45%' }} />
          <col span="1" style={{ width: '30%' }} />
          <col span="1" style={{ width: '25%' }} />
        </colgroup>
        <tbody>
          <tr>
            <Th />
            <Th>SPEC</Th>
            <Th>PORTION</Th>
          </tr>
          {feature.map((item, i) => (
            <tr key={item.name}>
              <Name>
                <Circle bgColor={colors[i]} />
                {item.spec ? item.name : '-'}
              </Name>
              <Spec>{item.spec ? item.spec : '-'}</Spec>
              <Portion>
                {item.spec ? `$${Math.round(item.value * 100) / 100}` : '-'}
              </Portion>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </ScrollBox>
  );
}

Table.propTypes = {
  feature: PropTypes.array,
  colors: PropTypes.array,
};

Table.defaultProps = {
  feature: [],
  colors: [],
};

export default Table;
