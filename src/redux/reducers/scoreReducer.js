import { GET_SCORE, CREATE_SCORE, EDIT_SCORE, DELETE_SCORE } from '../types';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const scoreReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_SCORE}_LOADING`:
      return {
        ...state,
      };
    case `${GET_SCORE}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_SCORE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${CREATE_SCORE}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${CREATE_SCORE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${CREATE_SCORE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${EDIT_SCORE}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${EDIT_SCORE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${EDIT_SCORE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${DELETE_SCORE}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${DELETE_SCORE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${DELETE_SCORE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default scoreReducer;
