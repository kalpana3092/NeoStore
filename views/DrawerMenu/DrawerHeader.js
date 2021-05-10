import React from 'react';
import {View, Image, Text} from 'react-native';
import * as ImgConstant from '../../utilities/Constants/ImageConstant';
import DrawerHeaderStyle from './DrawerHeader.style';
const DrawerHeader = () => {
  return (
    <View style={DrawerHeaderStyle.containerStyle}>
      <Image
        source={ImgConstant.NB_IMG_MALE}
        style={DrawerHeaderStyle.imageHeader}
      />
      <Text style={[DrawerHeaderStyle.textStyle, {fontSize: 20}]}>
        Kalpana Rane
      </Text>
      <Text style={[DrawerHeaderStyle.textStyle, {fontSize: 15}]}>
        kalpana.rane@neosoftmail.com
      </Text>
    </View>
  );
};
export default DrawerHeader;
