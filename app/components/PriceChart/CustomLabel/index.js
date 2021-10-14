import React from 'react';
import PropTypes from 'prop-types';

function CustomLabel({ viewBox, productName, pred }) {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      fill="#3d405c"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan
        dy={-30}
        x={cx}
        fontSize="15"
        fontFamily="AppleSDGothicNeo"
        fill="#304156"
      >
        {productName || '-'}
      </tspan>
      <tspan
        dy={30}
        x={cx}
        fontSize="32"
        fontFamily="Roboto"
        fontWeight="bold"
        fill="#304156"
      >
        {pred ? `$${Math.round(pred * 100) / 100}` : '-'}
      </tspan>
      <tspan dy={30} x={cx} fontSize="15" fontFamily="Roboto" fill="#828d99">
        /per
      </tspan>
    </text>
  );
}

CustomLabel.propTypes = {
  viewBox: PropTypes.object,
  productName: PropTypes.string,
  pred: PropTypes.number,
};

export default CustomLabel;
