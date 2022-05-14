/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ConfigureStore from './redux/store/ReduxStore';
import {Provider} from 'react-redux';
const reduxStore = ConfigureStore();
const NeoStorel = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => NeoStorel);
