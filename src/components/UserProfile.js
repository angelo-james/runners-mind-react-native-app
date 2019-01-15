import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { getUser } from '../actions/userActions';
import UsersList from './UsersList';
import UserCard from './UserCard';
import UserPost from './UserPost';
import LoginForm from './LoginForm';
import UserFollowers from './UserFollowers';

class UserProfile extends Component {
  state = {
    toggle: false
  }

  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <UserCard 
          toggle={this.toggleState}
        />
        {/* {!this.state.toggle ? null : <UsersList />} */}
        
        <UserPost />
        <UserFollowers 
          toggle={this.toggleState}
          showModal={this.state.toggle}
        />
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
    flexDirection: 'column',
    justifyContent: 'center'
    
  },
  runnersText: {
    textAlign: 'center'
  },
  loginButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);