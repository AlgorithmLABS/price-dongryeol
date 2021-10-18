import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Feature from './Feature';
import Th from './Th';
import Input from '../Input';
import Select from '../Select';

const ScrollBox = styled.div`
  padding: 21.5px 12px;
  margin-bottom: 21.5px;
  width: 555px;
  height: 500px;
  max-height: 50vh;
  overflow: scroll;
`;

const TableContainer = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

function FormTable({ register, optionList }) {
  return (
    <ScrollBox>
      <TableContainer>
        <colgroup>
          <col span="1" style={{ width: '50%' }} />
          <col span="1" style={{ width: '50%' }} />
        </colgroup>
        <tbody>
          <tr>
            <Th>FEATURE</Th>
            <Th>SPEC</Th>
          </tr>
          {optionList.map(item => {
            const isSelect =
              item.dataType === 'categorical' || item.dataType === 'boolean';
            return (
              <tr key={item.featureTitle}>
                <Feature>{item.featureTitle}</Feature>
                <td>
                  {isSelect ? (
                    <Select
                      name={item.featureTitle}
                      register={register}
                      options={item.option}
                      type={item.dataType}
                    />
                  ) : (
                    <Input
                      placeholder="No data"
                      type="number"
                      min={0}
                      {...item.dataType === 'float' && { step: 0.01 }}
                      {...register(item.featureTitle, {
                        valueAsNumber: true,
                      })}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </ScrollBox>
  );
}

FormTable.propTypes = {
  register: PropTypes.func,
  optionList: PropTypes.array,
};

export default FormTable;
