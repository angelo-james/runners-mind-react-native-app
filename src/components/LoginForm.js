import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, H1 } from 'native-base';

class LoginForm extends Component {
  render() {
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
          <Button style={styles.loginButton} small bordered><Text> Login </Text></Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    marginTop: 275,
  }
})

export default LoginForm;