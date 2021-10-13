import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  width: 154px;
  height: 78px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  border: solid 1px #f0f1f2;
  border-radius: 3px;
  box-shadow: -7px 8px 16px 0 rgba(55, 70, 95, 0.07);
`;

const Tail = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: rotate(45deg) translateX(-50%);
  background-color: #fff;
  border-style: solid;
  border-color: #f0f1f2;
  border-width: 0 1px 1px 0;
`;

function TooltipBox({ children }) {
  return (
    <Box>
      {children}
      <Tail />
    </Box>
  );
}

TooltipBox.propTypes = {
  children: PropTypes.node,
};

export default TooltipBox;
