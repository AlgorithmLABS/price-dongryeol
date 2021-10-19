import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import BigInput from './BigInput';
import Button from './Button';
import Dim from './Dim';
import FormTable from './FormTable';
import Icon from './Icon';
import SmallText from './SmallText';
import TopBox from './TopBox';
import IconSrc from './icon/predict.png';
import CloseIconSrc from './icon/close.png';
import CloseButton from './CloseButton';

const FormContainer = styled.form`
  padding: 48px;
  border-radius: 4px;
  background-color: #fafbfb;
`;

function Form({ data, featureList, closeForm, submitFn }) {
  const optionList = featureList
    ? featureList.map(item => JSON.parse(item))
    : [];

  const defaultData = {};
  if (data.feature) {
    const { feature } = data;
    const keys = Object.keys(feature);
    keys.forEach(key => {
      defaultData[key] = feature[key].SPEC;
    });
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...(data.product_name && { productName: data.product_name }),
      ...(data.feature && { ...defaultData }),
    },
  });

  const onSubmit = values => {
    const formData = {};
    const keys = Object.keys(values);
    keys.forEach(key => {
      const value = values[key];
      if (value) {
        formData[key] = value;
      }
    });
    submitFn({ formData });
  };

  return (
    <Dim>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TopBox>
          <SmallText>PRODUCT NAME</SmallText>
          <BigInput {...register('productName')} />
          <CloseButton src={CloseIconSrc} onClick={closeForm} />
        </TopBox>
        <FormTable register={register} optionList={optionList} />
        <Button>
          가격 예측하기
          <Icon src={IconSrc} />
        </Button>
      </FormContainer>
    </Dim>
  );
}

Form.propTypes = {
  closeForm: PropTypes.func,
  submitFn: PropTypes.func,
  data: PropTypes.object,
  featureList: PropTypes.array,
};

export default Form;
