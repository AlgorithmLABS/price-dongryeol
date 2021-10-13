/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectData = () =>
  createSelector(
    selectHome,
    homeState => homeState.data,
  );

const makeSelectPostData = () =>
  createSelector(
    selectHome,
    homeState => homeState.postData,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

export { selectHome, makeSelectData, makeSelectPostData, makeSelectLoading };
