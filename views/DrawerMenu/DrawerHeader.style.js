import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';

const window = Dimensions.get('window');
const profilePicHeight = window.height * 0.14;
const DrawerHeaderStyle = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    padding: 30,
  },

  textStyle: {
    color: Colors.WHITE,
    fontFamily: Fonts.GOTHAM_BOLD,
    marginTop: 15,
  },

  imageHeader: {
    height: profilePicHeight,
    width: profilePicHeight,
    borderRadius: profilePicHeight * 0.5,
    borderWidth: 5,
    borderColor: 'white',
  },
});
export default DrawerHeaderStyle;
