/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FETCH_REQUEST = 'boilerplate/Home/FETCH_REQUEST';

export const FETCH_FAIL = 'boilerplate/Home/FETCH_FAIL';

export const FETCH_SUCCESS = 'boilerplate/Home/FETCH_SUCCESS';

export const FETCH_POST_REQUEST = 'boilerplate/Home/FETCH_POST_REQUEST';

export const FETCH_POST_FAIL = 'boilerplate/Home/FETCH_POST_FAIL';

export const FETCH_POST_SUCCESS = 'boilerplate/Home/FETCH_POST_SUCCESS';
