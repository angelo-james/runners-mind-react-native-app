import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { bindActionCreators } from 'redux';
import { List } from 'native-base';

class UsersList extends Component {
  render() {
    let { users } = this.props;
    
    return (
      <View>
        {!users ? (null) : users.map(user => (
          <Fragment key={user.id}>
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
          </Fragment>
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