import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Option from './Option';

const SelectContainer = styled.select`
  width: 128px;
  height: 34px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #fff;
  padding-left: 18px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #304156;
`;

function Select({ register, name, options, type }) {
  const selectOption = ['No data', ...options];
  return (
    <SelectContainer
      {...register(name, {
        ...(type === 'boolean' && { valueAsNumber: true }),
        ...(typeof options[0] === 'number' && { valueAsNumber: true }),
      })}
    >
      {type === 'boolean' ? (
        <>
          <Option value="">No data</Option>
          <Option value={0}>X</Option>
          <Option value={1}>O</Option>
        </>
      ) : (
        selectOption.map(o => (
          <Option key={o} value={o === 'No data' ? '' : o}>
            {o}
          </Option>
        ))
      )}
    </SelectContainer>
  );
}

Select.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.string,
};

Select.defaultProps = {
  name: '',
  options: [],
};

export default Select;
