import {
  GET_USER
} from '../actions/types';

const initialState = {
  email: '',
  username: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}