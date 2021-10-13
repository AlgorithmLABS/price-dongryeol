/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { fetchPostRequestAction, fetchRequestAction } from './actions';
import {
  makeSelectData,
  makeSelectLoading,
  makeSelectPostData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import MainContainer from './MainContainer';
import GridContainer from './GridContainer';
import ValidationChart from '../../components/ValidationChart';
import CoefficientChart from '../../components/CoefficientChart';
import ModelInfo from '../../components/ModelInfo';
import PriceChart from '../../components/PriceChart';
import Form from '../../components/Form';

const key = 'home';

export function HomePage({ data, loading, loadData }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [openForm, setOpenForm] = useState(true);

  const openFormFn = () => setOpenForm(true);

  const closeFormFn = () => setOpenForm(false);

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data, loading]);

  return (
    <MainContainer>
      <GridContainer>
        <PriceChart openForm={openFormFn} />
        <ModelInfo {...data.modelInfo} />
        <CoefficientChart {...data.modelInfo} />
        <ValidationChart list={data.validation} />
      </GridContainer>
      {openForm && <Form closeForm={closeFormFn} />}
    </MainContainer>
  );
}

HomePage.propTypes = {
  data: PropTypes.object,
  postData: PropTypes.object,
  loading: PropTypes.bool,
  loadData: PropTypes.func,
  loadPostData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  postData: makeSelectPostData(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(fetchRequestAction()),
    loadPostData: () => dispatch(fetchPostRequestAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
