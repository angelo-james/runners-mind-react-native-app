import {
  GET_USER
} from './types';

export const getUser = () => {
  return async dispatch => {
    try {
      let response = await fetch(`http://127.0.0.1:3800/api/users`)
      let result = await response.json()
      dispatch({
        type: GET_USER,
        payload: result,
      })
    } catch (err) {
      console.log(err);
    }
  }
}