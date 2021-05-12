import {StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';

const CustomRatingStyle = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  starImageStyle: {
    resizeMode: 'cover',
    marginRight: 3,
  },
});
export default CustomRatingStyle;
