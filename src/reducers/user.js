import {
  combineActions,
  handleActions,
} from 'redux-actions';

import {
  LOGIN,
  LOGOUT,
} from '../constants/actionTypes/user';

const initialState = {
  authData: {
    isLoading: false,
  },
};

export default handleActions({
  [LOGIN.REQUEST]: state => ({
    ...state,
    authData: {
      isLoading: true,
    },
  }),

  [combineActions(
    LOGIN.FAILURE,
    LOGIN.SUCCESS
  )]: (state, { payload, error }) => ({
    ...state,
    authData: error ? {
      error: payload,
    } : {
      payload,
    },
  }),

  [LOGOUT.REQUEST]: state => ({
    ...state,
    authData: {
      isLoading: true,
    },
  }),

  [combineActions(
    LOGOUT.FAILURE,
    LOGOUT.SUCCESS
  )]: (state, { payload, error }) => ({
    ...state,
    authData: error ? {
      error: payload,
    } : {
      ...initialState,
    },
  }),
}, initialState);
