import React, { useEffect } from 'react';
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

function Form({ closeForm }) {
  const { register, watch, getValues, handleSubmit } = useForm();

  useEffect(() => {
    console.log(getValues());
  }, [watch()]);

  const onSubmit = v => {
    console.log(v);
  };
  return (
    <Dim>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TopBox>
          <SmallText>PRODUCT NAME</SmallText>
          <BigInput {...register('productName')} />
          <CloseButton src={CloseIconSrc} onClick={closeForm} />
        </TopBox>
        <FormTable register={register} />
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
};

export default Form;
