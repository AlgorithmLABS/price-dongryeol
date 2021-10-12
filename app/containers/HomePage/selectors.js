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

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

export { selectHome, makeSelectData, makeSelectLoading };
