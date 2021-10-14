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
import ShadowBox from '../ShadowBox';
import TooltipContent from './TooltipContent';
import TitleBox from './TitleBox';
import Title from './Title';

const ValidationContainer = styled(ShadowBox)`
  position: relative;
  grid-area: validation;
  height: 400px;
  padding: 34px 36px;
`;

function Validation({ list }) {
  if (list.length && list.length > 0) {
    return (
      <ValidationContainer>
        <TitleBox>
          <Title>모델 평가 결과 (Validation)</Title>
        </TitleBox>
        <ResponsiveContainer>
          <BarChart data={list} barCategoryGap={8} margin={{ top: 10 }}>
            <XAxis
              dataKey="valid_id"
              tickLine={false}
              tickMargin={10}
              tick={{ stroke: '##828d99', fontSize: 12 }}
              reversed
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={t => `$${t}.00`}
              tick={{ stroke: '##828d99', fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              position={{ y: 30 }}
              content={<TooltipContent />}
            />
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
            <Bar
              dataKey="pred"
              fill="#0099fe"
              barSize={7}
              radius={[5, 5, 0, 0]}
            />
            <Bar
              dataKey="value"
              fill="#828d99"
              barSize={7}
              radius={[5, 5, 0, 0]}
            />
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
