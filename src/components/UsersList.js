import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';

class UsersList extends Component {
  render() {
    let { users } = this.props;

    return (
      <View>
        {!users ? (null) : users.map(user => (
          <React.Fragment>
            <Text>{user.email}</Text>
            <Text>{user.username}</Text>
          </React.Fragment>
        ))}
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch => {
  return {
    
  }
})

const mapStateToProps = (state, dispatch) => {
  return {
    users: state.user.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);