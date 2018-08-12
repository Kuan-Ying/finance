import { createStackNavigator } from 'react-navigation';

import routeConfigs from './routeConfigs';
import SPLASH_SCREEN from '../constants/routes';

const navigatorConfigs = {
  initialRouteName: SPLASH_SCREEN,
  mode: 'modal',
  navigationOptions: {
  },
};

export default createStackNavigator(routeConfigs, navigatorConfigs);
