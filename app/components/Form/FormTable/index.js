import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Feature from './Feature';
import Th from './Th';
import Input from '../Input';
import Select from '../Select';

const TableContainer = styled.table`
  padding: 21.5px 12px;
  width: 555px;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

function FormTable({ register }) {
  const features = [
    { name: '물동(kea/월)', type: 'input' },
    { name: 'Inch', type: 'input' },
    { name: '해상도', type: 'select' },
    { name: '전광 Spec', type: 'input' },
    { name: 'LED 개수', type: 'input' },
    { name: '평탄 Spec', type: 'input' },
    {
      name: 'ALCF 유무',
      type: 'select',
      options: [{ value: 0, text: 'X' }, { value: 1, text: 'O' }],
    },
    {
      name: 'D/Casting 유무',
      type: 'select',
      options: [{ value: 0, text: 'X' }, { value: 1, text: 'O' }],
    },
    {
      name: 'Area Scan 유무',
      type: 'select',
      options: [{ value: 0, text: 'X' }, { value: 1, text: 'O' }],
    },
    { name: '이물 갯수', type: 'input' },
    { name: '바이어', type: 'input' },
  ];
  return (
    <TableContainer>
      <colgroup>
        <col span="1" style={{ width: '50%' }} />
        <col span="1" style={{ width: '50%' }} />
      </colgroup>
      <tr>
        <Th>FEATURE</Th>
        <Th>SPEC</Th>
      </tr>
      {features.map(item => (
        <tr key={item.name}>
          <Feature>{item.name}</Feature>
          <td>
            {item.type === 'select' ? (
              <Select
                name={item.name}
                register={register}
                options={item.options}
              />
            ) : (
              <Input
                placeholder="No data"
                type="number"
                {...register(item.name)}
              />
            )}
          </td>
        </tr>
      ))}
    </TableContainer>
  );
}

FormTable.propTypes = {
  register: PropTypes.func,
};

export default FormTable;
