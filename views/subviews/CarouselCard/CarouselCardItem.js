import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import CarouselCardItemStyle from './CarouselCardItem.style';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={CarouselCardItemStyle.container} key={index}>
      <Image source={item} style={CarouselCardItemStyle.image} />
    </View>
  );
};

export default CarouselCardItem;
