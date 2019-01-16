import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { Text, Button } from 'native-base';
import { getUser } from '../actions/userActions';

import UserCard from './UserCard';
import UserPost from './UserPost';
import UserFollowers from './UserFollowers';

class UserProfile extends Component {
  state = {
    toggle: false
  }

  toggle = (navigate) => {
    navigate('RunScreen')
  }

  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <UserCard 
          toggle={this.toggleState}
        />
        <Button onPress={() => this.toggle(navigate)} style={{alignSelf: 'center'}} small bordered>
          <Text>
            Start a New Run
          </Text>
        </Button>
        <ScrollView>
          <UserPost />
          <UserFollowers 
            toggle={this.toggleState}
            showModal={this.state.toggle}
          />
        </ScrollView>
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
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
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