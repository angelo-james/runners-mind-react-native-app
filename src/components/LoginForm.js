import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Form, Item, Label, Button, Text, H1 } from 'native-base';
import { validateUser } from '../actions/userActions';
class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = () => {
    if (this.state.email.trim() === '') return
    this.props.validateUser(this.state)
    this.props.navigation.navigate('UserProfile')
  }

  onChangePassword = (val) => {
    this.setState({
      password: val.toLowerCase()
    })
  }

  onChangeEmail = (val) => {
    this.setState({
      email: val.toLowerCase()
    })
  }

  render() {
    return (
      <Container
        style={styles.Container}
      >
        <Form>
          <H1 style={{alignSelf: 'center'}}> Runners Mind </H1>
          
            {/* <Label>email</Label> */}
            <TextInput 
              placeholder='email'
              
              value={this.state.email}
              onChangeText={this.onChangeEmail}
            />
          
          
            {/* <Label>Password</Label> */}
            <TextInput 
              placeholder='password'
              
              value={this.state.password}
              onChangeText={this.onChangePassword}              
            />
          
          <Button onPress={this.handleSubmit} style={styles.loginButton} small bordered>
            <Text> Login </Text>
          </Button>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch => {
  return {
    validateUser: bindActionCreators(validateUser, dispatch)
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