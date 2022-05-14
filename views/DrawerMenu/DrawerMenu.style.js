import React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';

const DrawerMenuStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? StatusBar.currentHeight || 0 : 0,
    backgroundColor: Colors.MENU_BG,
  },

  separatorStyle: {
    height: 0.5,
    backgroundColor: Colors.BLACK,
  },

  flatlistBg: {
    backgroundColor: Colors.MENU_BG,
  },
});
export default DrawerMenuStyle;
