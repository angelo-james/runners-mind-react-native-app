import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import UserProfile from './src/components/UserProfile';
import LoginFrom from './src/components/LoginForm';


const TabNavigator = createStackNavigator({
  LoginForm: LoginFrom,
  UserProfile: UserProfile
})

export default createAppContainer(TabNavigator);
