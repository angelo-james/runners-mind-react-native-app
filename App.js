import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import UserProfile from './src/components/UserProfile';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Welcome to Runners Mind</Text>
          <Button 
            title="Get Data"
          />
          <UserProfile />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;