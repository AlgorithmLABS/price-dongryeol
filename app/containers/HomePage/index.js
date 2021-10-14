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

export function HomePage({ data, postData, loadData, loadPostData }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [openForm, setOpenForm] = useState(false);

  const openFormFn = () => setOpenForm(true);

  const closeFormFn = () => setOpenForm(false);

  useEffect(() => {
    loadData({});
  }, []);

  useEffect(() => {
    if (postData) {
      closeFormFn();
    }
  }, [postData]);

  return (
    <MainContainer>
      <GridContainer>
        <PriceChart openForm={openFormFn} data={postData} />
        <ModelInfo {...data.modelInfo} />
        <CoefficientChart {...data.modelInfo} />
        <ValidationChart list={data.validation} />
      </GridContainer>
      {openForm && (
        <Form
          data={postData}
          featureList={data.modelInfo.feature_list}
          closeForm={closeFormFn}
          submitFn={loadPostData}
        />
      )}
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

const mapDispatchToProps = dispatch => ({
  loadData: ({ projectId, modelId }) =>
    dispatch(fetchRequestAction({ projectId, modelId })),
  loadPostData: ({ formData, projectId, modelId }) =>
    dispatch(fetchPostRequestAction({ formData, projectId, modelId })),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
