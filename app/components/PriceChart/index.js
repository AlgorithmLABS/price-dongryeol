import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import ShadowBox from '../ShadowBox';
import Button from './Button';
import Icon from './Icon';
import Title from './Title';
import TopBox from './TopBox';
import IconSrc from './icon/plus.png';
import Table from '../Table';
import Dim from './Dim';
import DimText from './DimText';

const PriceContainer = styled(ShadowBox)`
  padding: 36px 48px;
  grid-area: price;
  position: relative;
`;

function Price({ data, openForm }) {
  const sampleData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  return (
    <PriceContainer>
      {!data && (
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
        {data && (
          <Button onClick={openForm}>
            신규 가격 예측하기
            <Icon src={IconSrc} />
          </Button>
        )}
      </TopBox>
      <ResponsiveContainer height={200}>
        <PieChart>
          <Pie
            data={sampleData}
            innerRadius={75}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          />
        </PieChart>
      </ResponsiveContainer>
      <Table />
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
