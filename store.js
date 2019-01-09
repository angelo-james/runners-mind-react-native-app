import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './src/reducers/rootReducer';

const initialState = {};

const middleware = [ ReduxThunk ];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  )
)

export default store;