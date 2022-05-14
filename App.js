/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RouteStack from './route/RouteStack';
import DrawerStack from './route/DrawerStack';
import CommonMethods from './utilities/Common/CommonMethods';
import {getLoginStatus} from './redux/actions/LoginAction';

const App = () => {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    CommonMethods.CheckIsLogin().then((loginStatus) => {
      dispatch(getLoginStatus(loginStatus));
    });
  }, [isLogin]);
  return isLogin != undefined ? (
    isLogin ? (
      <DrawerStack />
    ) : (
      <RouteStack />
    )
  ) : null;
};

export default App;
