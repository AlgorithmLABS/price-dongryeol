/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  successful: false,
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_REQUEST:
        draft.loading = true;
        draft.successful = true;
        draft.data = initialState.data;
        break;
      case FETCH_FAIL:
        draft.loading = false;
        draft.successful = false;
        draft.data = initialState.data;
        break;
      case FETCH_SUCCESS:
        draft.loading = false;
        draft.successful = true;
        draft.data = action.payload;
        break;
      default:
        break;
    }
  });

export default homeReducer;
