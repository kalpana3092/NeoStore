import React from 'react';
import {StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';

const DrawerItemStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.GOTHAM_BOLD,
    color: Colors.WHITE,
    padding: 5,
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginHorizontal: 15,
    resizeMode: 'contain',
  },
});
export default DrawerItemStyle;
