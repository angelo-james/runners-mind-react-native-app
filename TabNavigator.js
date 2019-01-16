import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import RunScreen from './src/components/RunScreen';

const TabNavigator = createBottomTabNavigator({
  RunScreen: RunScreen
});

export default createAppContainer(TabNavigator);