import React from 'react';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as ImgConstant from '../../../utilities/Constants/ImageConstant';
import MyCartItemStyle from './MyCartItem.style';

const MyCartItem = (prop) => {
  return (
    <View>
      <View style={MyCartItemStyle.conatinerView}>
        <Image
          style={MyCartItemStyle.image}
          source={ImgConstant.HM_IMG_TABLE}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 5}}>
            <Text style={MyCartItemStyle.name}>{prop.name}</Text>
            <Text style={MyCartItemStyle.category}>({prop.category})</Text>
          </View>
          <View style={MyCartItemStyle.pricerateView}>
            <TouchableOpacity style={MyCartItemStyle.qtyView}>
              <Text style={MyCartItemStyle.price}>{prop.qty}</Text>
              <Image
                style={MyCartItemStyle.arrowimage}
                source={ImgConstant.MC_IMG_Arrow}
              />
            </TouchableOpacity>
            <Text style={MyCartItemStyle.price}>{prop.price}</Text>
          </View>
        </View>
      </View>
      <View style={MyCartItemStyle.horizontalLine} />
    </View>
  );
};
export default MyCartItem;
