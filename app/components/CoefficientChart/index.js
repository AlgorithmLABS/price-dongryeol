import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Bar,
  BarChart,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import TitleBox from './TitleBox';
import Title from './Title';
import ShadowBox from '../ShadowBox';

const CoefficientContainer = styled(ShadowBox)`
  min-height: 400px;
  grid-area: coefficient;
  max-height: 50vh;
  overflow-y: hidden;
  position: relative;
`;

const ScrollBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 80%;
  padding: 0px 30px;
  overflow-y: scroll;
`;

function Coefficient({ coefficient }) {
  const chartList = [];
  Object.keys(coefficient).forEach(key => {
    const value = coefficient[key];
    if (typeof value === 'object') {
      Object.keys(value).forEach(k => {
        const v = value[k];
        chartList.push({ key: `${key}=${k}`, value: v });
      });
    } else {
      chartList.push({ key, value });
    }
  });
  return (
    <CoefficientContainer>
      <TitleBox>
        <Title>예측 산출 가중치 (Coefficient)</Title>
      </TitleBox>
      <ScrollBox>
        <ResponsiveContainer minHeight={1500}>
          <BarChart data={chartList} barSize={4} layout="vertical">
            <ReferenceLine x={0} stroke="#f0f1f2" strokeWidth={2} />
            <XAxis type="number" hide domain={[-10, 10]} />
            <YAxis
              yAxisId={0}
              dataKey="key"
              axisLine={false}
              tickLine={false}
              tickFormatter={t => `[${t}]`}
              tick={{ fontSize: 12 }}
              width={120}
              type="category"
            />
            <YAxis
              yAxisId={1}
              dataKey="value"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickFormatter={t => {
                let num = parseFloat(t);
                if (num !== 0) num = num > 0 ? `+${num}` : num;
                const strNum = num.toString();
                return strNum.length > 8 ? strNum.slice(0, 8) : strNum;
              }}
              tick={{ fontSize: 12 }}
              width={60}
              type="category"
            />
            <Bar
              dataKey="value"
              fill="#8884d8"
              background={{ fill: '#f0f1f2' }}
              radius={5}
            >
              {chartList.map(item => (
                <Cell
                  key={item.key}
                  fill={item.value > 0 ? '#304156' : '#fd4d7a'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ScrollBox>
    </CoefficientContainer>
  );
}

Coefficient.propTypes = {
  coefficient: PropTypes.object,
};

Coefficient.defaultProps = {
  coefficient: {},
};

export default Coefficient;
