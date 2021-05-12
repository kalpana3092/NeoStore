import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import * as ImgConstant from '../../../utilities/Constants/ImageConstant';
import CustomRatingStyle from './CustomRatingView.style';
const CustomRatingView = (props) => {
  return (
    <View style={CustomRatingStyle.customRatingBarStyle}>
      {props.maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => console.log(item)}
            disabled={props.disabled}>
            <Image
              style={[
                CustomRatingStyle.starImageStyle,
                {width: props.imageSize, height: props.imageSize},
              ]}
              source={
                item <= props.defaultRating
                  ? ImgConstant.PL_IMG_STARCHECK
                  : ImgConstant.PL_IMG_STARUNCHECK
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default CustomRatingView;
