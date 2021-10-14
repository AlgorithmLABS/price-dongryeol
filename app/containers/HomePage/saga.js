/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_FAIL,
  FETCH_POST_FAIL,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from './constants';
import { getInitApi, postApi } from './apis';

export function* getData(action) {
  const { projectId, modelId } = action;
  try {
    const payload = yield call(getInitApi, { projectId, modelId });
    yield put({ type: FETCH_SUCCESS, payload });
  } catch (error) {
    yield put({ type: FETCH_FAIL });
  }
}

export function* postData(action) {
  const { projectId, modelId, formData } = action;
  try {
    const payload = yield call(postApi, { projectId, modelId, formData });
    yield put({ type: FETCH_POST_SUCCESS, payload });
  } catch (error) {
    yield put({ type: FETCH_POST_FAIL });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(FETCH_REQUEST, getData),
    takeLatest(FETCH_POST_REQUEST, postData),
  ]);
}
