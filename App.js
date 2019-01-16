import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import TabNavigator from './TabNavigator';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppNavigator />
          {/* <TabNavigator /> */}
      </Provider>
    );
  }
}

export default App;