import {
  GET_USER
} from '../actions/types';

const initialState = {
  email: '',
  username: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state;
  }
}