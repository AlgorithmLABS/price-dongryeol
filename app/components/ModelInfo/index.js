import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorRange from '../ErrorRange';
import ShadowBox from '../ShadowBox';
import Title from './Title';
import Text from './Text';
import MessageBox from './MessageBox';
import MessageText from './MessageText';
import ModelName from './ModelName';

const ModelInfoContainer = styled(ShadowBox)`
  grid-area: modelInfo;
  padding 15% 10%;
  text-align: center;
`;

function ModelInfo({ attributes }) {
  const { total } = attributes;
  const trainTest = Math.floor(total * attributes.train_test_split);
  return (
    <ModelInfoContainer>
      <Title>예측 오차 범위</Title>
      <ErrorRange MAE={attributes.MAE} />
      <MessageBox>
        <MessageText>
          기존 {total}종류 샘플에 대한 데이터를 학습시키고,{' '}
          <strong>
            기존 {trainTest}개의 샘플과 인공지능으로 예측한 {total - trainTest}
            개의 샘플을 비교
          </strong>
          여 얻은 결과입니다.
        </MessageText>
      </MessageBox>
      <Text>적용된 인공지능 모델</Text>
      <ModelName>{attributes.algo}</ModelName>
    </ModelInfoContainer>
  );
}

ModelInfo.propTypes = {
  attributes: PropTypes.object,
};

ModelInfo.defaultProps = {
  attributes: {},
};

export default ModelInfo;
