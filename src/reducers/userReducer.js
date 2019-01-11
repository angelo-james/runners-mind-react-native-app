import {
  actionTypes
} from '../actions';

const initialState = {
  email: '',
  username: ''
}

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        users: payload
      }
    default:
      return state;
  }
}