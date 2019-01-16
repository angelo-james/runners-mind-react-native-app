import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Form, Item, Label, Button, Text, H1 } from 'native-base';
import { validateUser } from '../actions/userActions';
class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  toggle = (navigate) => {
    this.props.getUser()
    navigate('UserProfile')
  }

  handleUserInfoChange = () => {
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <Container
        style={styles.Container}
      >
        <Form>
          <H1 style={{alignSelf: 'center'}}> Runners Mind </H1>
          <Item floatingLabel>
            <Label>Username</Label>
            <TextInput 
              value='username'
              onChangeText={ (e) => this.setState({username: e.target.value}) }
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <TextInput 
              onChangeText={ this.props.enterPassword }
            />
          </Item>
          <Button onPress={() => this.toggle(navigate)} style={styles.loginButton} small bordered>
            <Text> Login </Text>
          </Button>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch => {
  return {
    getUser: bindActionCreators(validateUser, dispatch)
  }
})

const mapStateToProps = (state, dispatch) => {
  return {
    ...state.user
  }
}

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  Container: {
    paddingTop: 20,
    backgroundColor: '#fff'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);