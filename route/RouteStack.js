import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import LoginView from '../views/Login/LoginView';
import HomeView from '../views/Home/HomeView';
import RegisterView from '../views/Register/RegisterView';
import ProductListingView from '../views/ProductListing/ProductListingView';
import RouteConstant from '../utilities/Constants/RouteConstant';

const Stack = createStackNavigator();
const RouteStack = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName={RouteConstant.Login}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e91c1a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerBackTitle: ' ',
        }}>
        <Stack.Screen name={RouteConstant.Login} component={LoginView} />
        <Stack.Screen
          name={RouteConstant.Register}
          component={RegisterView}
          options={{title: 'Register'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RouteStack;
