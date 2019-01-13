import React, { Component } from 'react';
import { View } from 'react-native';
import UserProfile from './src/components/UserProfile';
import { Provider } from 'react-redux';
import TabNavigator from './TabNavigator';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <TabNavigator />
      </Provider>
    );
  }
}

export default App;