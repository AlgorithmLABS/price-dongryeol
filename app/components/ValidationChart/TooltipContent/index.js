import React from 'react';
import PropTypes from 'prop-types';
import Circle from './Circle';
import Label from './Label';
import Payload from './Payload';
import PayloadBox from './PayloadBox';
import TooltipBox from './TooltipBox';

function TooltipContent({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <TooltipBox>
        <Label>{label}</Label>
        <PayloadBox>
          {payload.map(p => (
            <Payload key={p.dataKey}>
              <Circle color={p.color} />
              <span>${Math.round(p.value * 100) / 100}</span>
            </Payload>
          ))}
        </PayloadBox>
      </TooltipBox>
    );
  }

  return null;
}

TooltipContent.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TooltipContent;
