import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerMenu from '../views/DrawerMenu/DrawerMenu';
import HomeView from '../views/Home/HomeView';
import ProductListingView from '../views/ProductListing/ProductListingView';
import MyAccountView from '../views/MyAccount/MyAccountView';
import RouteConstant from '../utilities/Constants/RouteConstant';
import * as ImgConstant from '../utilities/Constants/ImageConstant';
import ProductDetailView from '../views/ProductDetail/ProductDetailView';
import ResetPasswordView from '../views/ResetPassword/ResetPasswordView';
import MyOrders from '../views/MyOrders/MyOrders';
import OrderDetailView from '../views/OrderDetail/OrderDetailView';
import MyCartView from '../views/MyCart/MyCartView';
import AddressListView from '../views/AddressView/AddressListView';
import StoreLocatorView from '../views/StoreLocator/StoreLocatorView';
import AddressView from '../views/AddressView/AddressView';

const Stack = createStackNavigator();
const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={ImgConstant.NB_IMG_HOME}
          style={{width: 25, height: 25, marginLeft: 8}}
        />
      </TouchableOpacity>
    </View>
  );
};

const NavigationScreenOption = () => {
  return {
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#e91c1a',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
    headerBackTitle: ' ',
  };
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName={RouteConstant.Home}>
      <Stack.Screen
        name={RouteConstant.Home}
        component={HomeView}
        options={{
          headerTitleAlign: 'center',
          title: 'NeoSTORE', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#e91c1a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={RouteConstant.Product}
        component={ProductListingView}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.ProductDetail}
        component={ProductDetailView}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.Account}
        component={MyAccountView}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.ResetPassword}
        component={ResetPasswordView}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.Order}
        component={MyOrders}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.OrderDetail}
        component={OrderDetailView}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.Cart}
        component={MyCartView}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.AddressList}
        component={AddressListView}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.Store}
        component={StoreLocatorView}
        options={NavigationScreenOption()}
      />
      <Stack.Screen
        name={RouteConstant.AddAddress}
        component={AddressView}
        options={NavigationScreenOption()}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName={RouteConstant.Product}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerShown: true,
        headerStyle: {
          backgroundColor: '#e91c1a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name={RouteConstant.Product}
        component={ProductListingView}
      />
      <Stack.Screen name={RouteConstant.Account} component={MyAccountView} />
    </Stack.Navigator>
  );
}

const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  const window = Dimensions.get('window').width;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{width: window * 0.8}}
        drawerType="back"
        drawerContent={(props) => <DrawerMenu {...props} />}>
        <Drawer.Screen name={RouteConstant.Home} component={firstScreenStack} />
        {/* <Drawer.Screen
          name={RouteConstant.Product}
          component={secondScreenStack}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerStack;
