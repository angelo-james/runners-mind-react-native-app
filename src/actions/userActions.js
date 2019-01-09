import {
  GET_USER
} from './types';

export const getUser = () => {
  return dispatch => {
    fetch('http')
    .then(result => {
      dispatch({
        type: GET_USER,
        payload: result.json()
      })
    })
  }
}