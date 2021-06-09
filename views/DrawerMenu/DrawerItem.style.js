import React from 'react';
import {StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';

const DrawerItemStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
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
  cartCount: {
    fontSize: 13,
    fontFamily: Fonts.GOTHAM_BOOK,
    color: Colors.WHITE,
  },
  cartCountBGView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.APP_TEXT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DrawerItemStyle;
