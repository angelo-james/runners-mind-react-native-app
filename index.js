import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const RNRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent('rncourse', () => RNRedux);