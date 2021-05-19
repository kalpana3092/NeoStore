import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import * as ImgConstant from '../../../utilities/Constants/ImageConstant';
import CustomRatingView from '../CustomRatingView/CustomRatingView';
import StoreLocatorItemStyle from './StoreLocatorItem.style';

const StoreLocatorItem = (prop) => {
  return (
    <TouchableOpacity
      onPress={() => {
        prop.OnPress('1');
      }}>
      <View style={StoreLocatorItemStyle.conatinerView}>
        <Image
          style={StoreLocatorItemStyle.image}
          source={ImgConstant.IMG_STORELOCATOR}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={StoreLocatorItemStyle.textContentView}>
            <Text style={StoreLocatorItemStyle.storeName}>{prop.name}</Text>
            <Text style={StoreLocatorItemStyle.address}>{prop.category}</Text>
          </View>
        </View>
      </View>
      <View style={StoreLocatorItemStyle.horizontalLine} />
    </TouchableOpacity>
  );
};
export default StoreLocatorItem;
