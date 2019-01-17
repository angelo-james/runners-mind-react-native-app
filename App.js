import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import {validateToken} from './src/actions/userActions';

import store from './store';

store.dispatch(validateToken())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppNavigator />
      </Provider>
    );
  }
}

export default App;