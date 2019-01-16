import { createAppContainer, createStackNavigator } from 'react-navigation';
import UserProfile from './src/components/UserProfile';
import LoginForm from './src/components/LoginForm';
import RunScreen from './src/components/RunScreen';

const AppNavigator = createStackNavigator({
  LoginForm: { 
    headerTitle:'Disable back Options',
    screen: LoginForm,
    navigationOptions: {
      title: 'Login'
    }
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      title: 'Profile',
      headerLeft: null
    }
  },
  RunScreen: {
    screen: RunScreen,
    navigationOptions: {
      title: 'Run Screen',
    }
  }
},
{
  initialRouteName: 'LoginForm'
})

export default createAppContainer(AppNavigator);