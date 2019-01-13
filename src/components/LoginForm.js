import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, H1 } from 'native-base';

class LoginForm extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
          <Form style={styles.container}>
            <H1> Runners Mind </H1>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button onPress={() => navigate('UserProfile')} style={styles.loginButton} small bordered><Text> Login </Text></Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    justifyContent: 'center',
  }
})

export default LoginForm;