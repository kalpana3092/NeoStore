import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import DrawerItemStyle from './DrawerItem.style';
const DrawerItem = ({item, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[DrawerItemStyle.item, style]}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={DrawerItemStyle.imageStyle} source={item.icon} />
      </View>
      <Text style={DrawerItemStyle.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};
export default DrawerItem;
