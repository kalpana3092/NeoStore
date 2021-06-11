/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import RouteStack from './route/RouteStack';
import DrawerStack from './route/DrawerStack';
const IsLogin = false;
const App = () => {
  return IsLogin ? <DrawerStack /> : <RouteStack />;
};

export default App;
