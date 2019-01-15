import {
  actionTypes
} from './';

export const getUser = () => {
  return async dispatch => {
    try {
      let response = await fetch(`http://runners-mind-python.herokuapp.com/api/users`)
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