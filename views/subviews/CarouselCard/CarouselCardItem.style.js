import {StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
import {ITEM_WIDTH} from './CarouselCardItem';

const CarouselCardItemStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    width: ITEM_WIDTH,
  },
  image: {
    width: ITEM_WIDTH,
    height: '100%',
  },
});

export default CarouselCardItemStyle;
