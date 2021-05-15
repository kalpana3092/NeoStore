import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import * as ImgConstant from '../../../utilities/Constants/ImageConstant';
import OrderDetailItemStyle from './OrderDetailItem.style';

const OrderDetailItem = (prop) => {
  return (
    <View>
      <View style={OrderDetailItemStyle.conatinerView}>
        <Image
          style={OrderDetailItemStyle.image}
          source={ImgConstant.HM_IMG_TABLE}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 5}}>
            <Text style={OrderDetailItemStyle.name}>{prop.name}</Text>
            <Text style={OrderDetailItemStyle.category}>{prop.category}</Text>
          </View>
          <View style={OrderDetailItemStyle.pricerateView}>
            <Text style={OrderDetailItemStyle.price}> QTY : {prop.qty}</Text>
            <Text style={OrderDetailItemStyle.price}>{prop.price}</Text>
          </View>
        </View>
      </View>
      <View style={OrderDetailItemStyle.horizontalLine} />
    </View>
  );
};
export default OrderDetailItem;
