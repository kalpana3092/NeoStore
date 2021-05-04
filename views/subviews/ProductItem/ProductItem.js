import React from 'react';
import {Image, View, Text} from 'react-native';
import {Rating} from 'react-native-ratings';
import ProductItemStyle from './ProductItem.style';
import * as ImgConstant from '../../../utilities/Constants/ImageConstant';

const ProductItem = (prop) => {
  return (
    <View>
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
          <View style={{marginTop: 10}}>
            <Text style={ProductItemStyle.name}>{prop.name}</Text>
            <Text style={ProductItemStyle.category}>{prop.category}</Text>
          </View>
          <View style={ProductItemStyle.pricerateView}>
            <Text style={ProductItemStyle.price}>{prop.price}</Text>
            <Rating
              type="custom"
              ratingImage={ImgConstant.PL_IMG_STARCHECK}
              ratingColor="clear"
              ratingBackgroundColor="clear"
              minValue={3}
              ratingCount={5}
              imageSize={20}
              // onFinishRating={this.ratingCompleted}
              // style={{paddingVertical: 10}}
              readonly={true}
            />
          </View>
        </View>
      </View>
      <View style={ProductItemStyle.horizontalLine} />
    </View>
  );
};
export default ProductItem;
