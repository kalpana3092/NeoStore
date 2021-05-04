import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import LoginView from '../views/Login/LoginView';
import HomeView from '../views/Home/HomeView';
import RegisterView from '../views/Register/RegisterView';
import ProductListingView from '../views/ProductListing/ProductListingView';

const Stack = createStackNavigator();
const RouteStack = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e91c1a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: ' ',
        }}>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterView}
          options={{title: 'Register'}}
        />
        <Stack.Screen
          name="PList"
          component={ProductListingView}
          options={{title: 'Tables'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RouteStack;
