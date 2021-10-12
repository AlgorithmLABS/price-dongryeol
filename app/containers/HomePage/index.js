/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { fetchRequestAction } from './actions';
import { makeSelectData, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import MainContainer from './MainContainer';
import GridContainer from './GridContainer';
import Validation from '../../components/Validation';

const key = 'home';

export function HomePage({ data, loading, loadData }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data, loading]);

  return (
    <MainContainer>
      <GridContainer>
        <div style={{ backgroundColor: 'red', gridArea: 'a' }} />
        <div style={{ backgroundColor: 'orange', gridArea: 'b' }} />
        <div style={{ backgroundColor: 'yellow', gridArea: 'c' }} />
        <Validation list={data.validation} />
      </GridContainer>
    </MainContainer>
  );
}

HomePage.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  loadData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(fetchRequestAction()),
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
