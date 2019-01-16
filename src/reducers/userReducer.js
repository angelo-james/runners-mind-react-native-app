import {
  actionTypes
} from '../actions';

const initialState = {
  username: '',
  password: ''
}

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        users: payload
      }
    case actionTypes.VALIDATE_USER:
      return {
        ...state,
        user: action.payload
      }
    case actionTypes.SEND_POST:
      return {
        ...state,
        post: action.payload
      }
    case actionTypes.SEND_POST_FAILED:
      return {
        ...state,
        post: action.payload
      }
    default:
      return state;
  }
}