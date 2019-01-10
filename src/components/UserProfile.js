import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { getUser } from '../actions/userActions';
import UsersList from './UsersList';

class UserProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.runnersText}>Welcome to Runners Mind</Text>
        <Button 
          onPress={()=>{this.props.getUser()}}
          title="Get Data"
        />
        <UsersList />
      </View> 
    )
  }
}

const mapDispatchToProps = (dispatch => {
  return {
    getUser: bindActionCreators(getUser, dispatch)
  }
})

const mapStateToProps = (state, dispatch) => {
  return {
    ...state.user
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'center'
    
  },
  runnersText: {
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);