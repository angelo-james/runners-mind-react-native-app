import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class UserProfile extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.email}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.user
  }
}

export default connect(mapStateToProps, null)(UserProfile);