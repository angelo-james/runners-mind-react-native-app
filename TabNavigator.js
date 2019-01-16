import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LoginForm from './src/components/LoginForm';
import UserProfile from './src/components/UserProfile';
import RunScreen from './src/components/RunScreen';

const TabNavigator = createBottomTabNavigator({
  RunScreen: RunScreen

});

export default createAppContainer(TabNavigator);