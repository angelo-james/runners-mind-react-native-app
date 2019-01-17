import {
  actionTypes
} from '../actions';

const initialState = {
  user: {},
  error: ''
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
        user: payload
      }
    case actionTypes.VALIDATE_USER_FAILED:
      return {
        ...state,
        user: {},
        error: payload
      }
    case actionTypes.VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        user: payload
      }
    case actionTypes.VALIDATE_TOKEN_FAILED:
      return {
        ...state,
        user: {},
        error: payload
      }
    case actionTypes.SEND_POST:
      return {
        ...state,
        post: payload
      }
    case actionTypes.SEND_POST_FAILED:
      return {
        ...state,
        post: payload
      }
    default:
      return state;
  }
}