import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import UserProfile from './src/components/UserProfile';
import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          <UserProfile />
        </ScrollView>
      </Provider>
    );
  }
}

export default App;