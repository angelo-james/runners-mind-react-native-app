import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers/rootReducer';
import logger from 'redux-logger';

const initialState = {};

const middleware = [ thunk, logger ];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store;