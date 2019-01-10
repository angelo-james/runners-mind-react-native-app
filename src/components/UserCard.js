import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Avatar } from 'react-native-elements';

class UserCard extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Avatar
            size="small"
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Right>
            <Body>
              <Text>AJ Arriola</Text>
              <Text note>@ajarriola</Text>
            </Body>
          </Right>
        </CardItem>
        <CardItem>
          <Body style={styles.friendsButton}>
            <Button transparent>
              <Text>12 Followers</Text>
            </Button>
            <Button transparent>
              <Text>4 Following</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  friendsButton: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default UserCard;