import axios from 'axios';
import { GET_SCORE, CREATE_SCORE, EDIT_SCORE, DELETE_SCORE } from '../types';

export const getScore = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_SCORE}_LOADING` });

    axios({
      method: 'GET',
      url: 'http://localhost:5000/score',
    })
      .then((response) => {
        dispatch({
          type: `${GET_SCORE}_FULFILLED`,
          payload: response.data,
        });
        // console.log("response data ", dispatch)
      })
      .catch((error) => {
        dispatch({
          type: `${GET_SCORE}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const createScore = (data) => {
  return (dispatch) => {
    dispatch({ type: `${CREATE_SCORE}_LOADING` });

    axios({
      method: 'POST',
      url: 'http://localhost:5000/score',
      data,
    })
      .then(() => {
        dispatch({
          type: `${CREATE_SCORE}_FULFILLED`,
        });
        dispatch(getScore());
      })
      .catch((error) => {
        dispatch({
          type: `${CREATE_SCORE}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const editScore = (id, data) => {
  return (dispatch) => {
    dispatch({ type: `${EDIT_SCORE}_LOADING` });

    axios({
      method: 'PUT',
      url: `http://localhost:5000/score/${id}`,
      data,
    })
      .then(() => {
        dispatch({
          type: `${EDIT_SCORE}_FULFILLED`,
        });
        dispatch(getScore());
      })
      .catch((error) => {
        dispatch({
          type: `${EDIT_SCORE}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const deleteScore = (id) => {
  return(dispatch) => {
    dispatch ({ type: `${DELETE_SCORE}_LOADING` });
    
    axios({
      method: 'DELETE',
      url: `http://localhost:5000/score/${id}`,
    })
    .then(() => {
      dispatch({
        type: `${DELETE_SCORE}_FULFILLED`,
      });
      dispatch(getScore());
    })
    .catch((error) => {
      dispatch({
        type: `${DELETE_SCORE}_ERROR`,
        error: error.message,
      });
    })
  };
};
