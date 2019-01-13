import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import UserProfile from './src/components/UserProfile';
import LoginFrom from './src/components/LoginForm';


const TabNavigator = createBottomTabNavigator({
  LoginForm: LoginFrom,
  UserProfile: UserProfile
})

export default createAppContainer(TabNavigator);
