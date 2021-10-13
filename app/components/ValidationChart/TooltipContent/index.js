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
            <Payload>
              <Circle color={p.color} />
              <span>${p.value.toString().slice(0, 5)}</span>
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
  label: PropTypes.string,
};

export default TooltipContent;
