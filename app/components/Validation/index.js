import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import styled from 'styled-components';
import LegendText from './LegendText';

const ValidationContainer = styled.div`
  grid-area: validation;
  height: 400px;
  background-color: #ffffff;
`;

function Validation({ list }) {
  console.log(list);
  if (list.length && list.length > 0) {
    const rList = list.reverse();
    return (
      <ValidationContainer>
        <ResponsiveContainer>
          <BarChart data={rList} barCategoryGap={8} margin={{ top: 10 }}>
            <XAxis dataKey="valid_id" />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={t => `$${t}.00`}
              tick={{ stroke: '##828d99' }}
            />
            <Tooltip cursor={{ fill: 'transparent' }} position={{ y: 30 }} />
            <Legend
              align="right"
              verticalAlign="top"
              iconType="circle"
              iconSize={8}
              formatter={value => (
                <LegendText>
                  {value === 'pred' ? '예측가격' : '실제가격'}
                </LegendText>
              )}
              height={50}
            />
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#f0f1f2"
            />
            <Bar dataKey="pred" fill="#0099fe" barSize={5} />
            <Bar dataKey="value" fill="#828d99" barSize={5} />
          </BarChart>
        </ResponsiveContainer>
      </ValidationContainer>
    );
  }
  return <ValidationContainer />;
}

Validation.propTypes = {
  list: PropTypes.array,
};

Validation.defaultProps = {
  list: [],
};

export default Validation;
