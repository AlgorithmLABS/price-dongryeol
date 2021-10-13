import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorNum from './ErrorNum';
import Icon from './Icon';
import IconSrc from './icon/error-range.png';

const ErrorRangeContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ErrorRange({ MAE }) {
  return (
    <ErrorRangeContainer>
      <Icon src={IconSrc} />
      <ErrorNum>${MAE}</ErrorNum>
    </ErrorRangeContainer>
  );
}

ErrorRange.propTypes = {
  MAE: PropTypes.number,
};

ErrorRange.defaultProps = {
  MAE: 0.0,
};

export default ErrorRange;
