import React from 'react';

import { SPLASH_SCREEN } from '../../constants/routes';
import SplashScreen from '../../components/SplashScreen';

export default {
  [SPLASH_SCREEN]: {
    screen: () => <SplashScreen />,
  },
};
