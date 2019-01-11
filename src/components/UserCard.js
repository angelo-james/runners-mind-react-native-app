import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Avatar } from 'react-native-elements';
import { getUser } from '../actions/userActions';

class UserCard extends Component {
  toggle = () => {
    this.props.getUser()
    this.props.toggle()
  }
  
  render() {
    return (
      <Card>
        <CardItem>
          <Body style={styles.userInfo}>
            <Text>AJ Arriola</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body style={styles.userInfo}>
            <Text note>@ajarriola</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body style={styles.friendsButton}>
            <Button transparent>
              <Text onPress={()=>{this.toggle()}}>
                4 Followers
              </Text>
            </Button>
            <Button transparent>
              <Text>0 Following</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
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
  friendsButton: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);