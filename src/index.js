import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './navigators/RootNavigator';
import configureStore from './lib/configStore';

export const store = configureStore();

export default function Main() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
