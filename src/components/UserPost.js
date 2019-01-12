import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import { getUser } from '../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserPost extends Component {
  render() {
    return (
      <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Button transparent style={styles.postUserName}>
                    <Text>@ajarriola</Text>
                  </Button>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://files.www.fleetfeetcincy.com/resources/running-routes/5MileCarp.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>
                    12 Likes
                  </Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
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
  postUserName: {
    marginBottom: 5,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPost);