import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { ListItem, Avatar } from 'react-native-elements'
import { List } from 'native-base';

class UsersList extends Component {
  render() {
    let { users } = this.props;

    return (
      <View>
        {!users ? (null) : users.map(user => (
          <React.Fragment>
            <ListItem 
              title={user.email}
              subtitle={user.username}
              leftAvatar={<Avatar
                size="small"
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
              />}
            />
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