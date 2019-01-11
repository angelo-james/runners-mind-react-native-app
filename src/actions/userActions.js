import {
  actionTypes
} from './';

export const getUser = () => {
  return async dispatch => {
    try {
      let response = await fetch(`http://127.0.0.1:3800/api/users`)
      let result = await response.json()
      dispatch({
        type: actionTypes.GET_USER,
        payload: result,
      })
    } catch (err) {
      console.log(err);
    }
  }
}