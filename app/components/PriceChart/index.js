import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import ShadowBox from '../ShadowBox';
import Button from './Button';
import Icon from './Icon';
import Title from './Title';
import TopBox from './TopBox';
import IconSrc from './icon/plus.png';
import Table from '../Table';
import Dim from './Dim';
import DimText from './DimText';
import CustomLabel from './CustomLabel';

const PriceContainer = styled(ShadowBox)`
  display: flex;
  flex-direction: column;

  padding: 6%;
  grid-area: price;
  position: relative;
`;

function Price({ data, openForm }) {
  const colors = ['#c99be4', '#fd4d7a', '#ffde00', '#73d500', '#0099fe'];
  let featureList = [];
  if (data.feature) {
    const { feature } = data;
    const keys = Object.keys(feature);
    keys.forEach(key => {
      const obj = {
        name: key,
        value: feature[key].price,
        spec: feature[key].SPEC,
      };
      featureList.push(obj);
    });
    featureList.sort((a, b) => b.value - a.value);
  } else {
    featureList = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
      { name: 'Group E', value: 100 },
      { name: 'Group F', value: 50 },
    ];
  }
  const chartList = featureList.filter(item => item.value > 0);
  return (
    <PriceContainer>
      {!data.feature && (
        <Dim>
          <DimText>신규 가격 예측을 생성해주세요.</DimText>
          <Button onClick={openForm}>
            신규 가격 예측하기
            <Icon src={IconSrc} />
          </Button>
        </Dim>
      )}
      <TopBox>
        <Title>가격예측</Title>
        {data.feature && (
          <Button onClick={openForm}>
            신규 가격 예측하기
            <Icon src={IconSrc} />
          </Button>
        )}
      </TopBox>
      <ResponsiveContainer maxHeight={200}>
        <PieChart>
          <Pie
            data={chartList}
            innerRadius={95}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            <Label
              position="center"
              content={
                <CustomLabel productName={data.product_name} pred={data.pred} />
              }
            />
            {featureList.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={colors[index] ? colors[index] : '#828d99'}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Table feature={featureList} colors={colors} />
    </PriceContainer>
  );
}

Price.propTypes = {
  data: PropTypes.object,
  openForm: PropTypes.func,
};

Price.defaultProps = {
  data: null,
};

export default Price;
