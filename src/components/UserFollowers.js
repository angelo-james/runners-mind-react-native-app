import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Modal, Text, TouchableHighlight, ScrollView, View, Alert, Header } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

class UserFollowers extends Component {
  state = {
    modalVisible: false,
  };
  
  render() {
    let { users } = this.props;
    console.log(this.props)
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          
          <ScrollView style={{marginTop: 22}}>
            <Text>
              Followers
            </Text>
            
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
              <TouchableHighlight
                onPress={() => {
                  this.props.toggle();
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            
          </ScrollView>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowers);