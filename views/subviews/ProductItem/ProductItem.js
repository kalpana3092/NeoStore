import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import ProductItemStyle from './ProductItem.style';
import * as ImgConstant from '../../../utilities/Constants/ImageConstant';
import CustomRatingView from '../CustomRatingView/CustomRatingView';

const ProductItem = (prop) => {
  return (
    <TouchableOpacity
      onPress={() => {
        prop.OnPress('1');
      }}>
      <View style={ProductItemStyle.conatinerView}>
        <Image
          style={ProductItemStyle.image}
          source={ImgConstant.HM_IMG_TABLE}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 5}}>
            <Text style={ProductItemStyle.name}>{prop.name}</Text>
            <Text style={ProductItemStyle.category}>{prop.category}</Text>
          </View>
          <View style={ProductItemStyle.pricerateView}>
            <Text style={ProductItemStyle.price}>{prop.price}</Text>
            <CustomRatingView
              maxRating={[1, 2, 3, 4, 5]}
              defaultRating={3}
              disabled={true}
              imageSize={20}
            />
          </View>
        </View>
      </View>
      <View style={ProductItemStyle.horizontalLine} />
    </TouchableOpacity>
  );
};
export default ProductItem;
