import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OrderItemStyle from './OrderItem.style';

const OrderItem = (prop) => {
  return (
    <TouchableOpacity
      onPress={() => {
        prop.OnPress(prop.id);
      }}>
      <View style={OrderItemStyle.conatinerView}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Text style={OrderItemStyle.order}>Order ID : {prop.id}</Text>
          <View style={OrderItemStyle.strokeLine} />
          <Text style={OrderItemStyle.orderDate}>
            Ordered Date : {prop.date}
          </Text>
        </View>
        <View style={OrderItemStyle.priceView}>
          <Text style={OrderItemStyle.price}>{prop.price}</Text>
        </View>
      </View>
      <View style={OrderItemStyle.horizontalLine} />
    </TouchableOpacity>
  );
};
export default OrderItem;
