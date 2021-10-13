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

function Select({ register, name, options }) {
  const selectOption = [{ value: '', text: 'No data' }, ...options];
  console.log(selectOption);
  return (
    <SelectContainer {...register(name)}>
      {selectOption.map(o => (
        <Option key={o.text} value={o.value}>
          {o.text}
        </Option>
      ))}
    </SelectContainer>
  );
}

Select.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.array,
};

Select.defaultProps = {
  name: '',
  options: [],
};

export default Select;
