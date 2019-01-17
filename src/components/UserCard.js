import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CardItem, Text, Button, Body, H1 } from 'native-base';
import { getUser } from '../actions/userActions';

class UserCard extends Component {
  toggle = () => {
    this.props.getUser()
    this.props.toggle()
  }

  render() {
    return !this.props.user ? null : (
      <View>
        <CardItem>
          <Body style={styles.userInfo}>
            <H1>@{this.props.user.name}</H1>
          </Body>
        </CardItem>
        <CardItem>
          <Body style={styles.friendsButton}>
            <Button transparent>
              <Text onPress={()=>{this.toggle()}}>
                {this.props.user.followers.length} Followers
              </Text>
            </Button>
            <Button transparent>
              <Text onPress={()=>{this.toggle()}}>
              {this.props.user.following.length} Following
              </Text>
            </Button>
          </Body>
        </CardItem>
        <CardItem style={{alignSelf: 'center', justifyContent: 'space-between'}}>
            <Button small bordered success>
              <Text>Follow</Text>
            </Button>
            <Button small bordered danger>
              <Text>Unfollow</Text>
            </Button>
        </CardItem>
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
    user: state.user.user.user
  }
}

const styles = StyleSheet.create({
  friendsButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);