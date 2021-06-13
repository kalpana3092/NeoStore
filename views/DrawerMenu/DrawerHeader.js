import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';
import * as ImgConstant from '../../utilities/Constants/ImageConstant';
import DrawerViewModel from '../../viewmodel/Drawer/DrawerViewModel';
import DrawerHeaderStyle from './DrawerHeader.style';

const DrawerHeader = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    DrawerViewModel.GetUserData().then((user) => {
      setUserData(user);
    });
  });
  return (
    <View style={DrawerHeaderStyle.containerStyle}>
      <Image
        source={ImgConstant.NB_IMG_MALE}
        style={DrawerHeaderStyle.imageHeader}
      />
      <Text style={[DrawerHeaderStyle.textStyle, {fontSize: 20}]}>
        {userData.first_name + ' ' + userData.last_name}
      </Text>
      <Text style={[DrawerHeaderStyle.textStyle, {fontSize: 15}]}>
        {userData.email}
      </Text>
    </View>
  );
};
export default DrawerHeader;
