import {Dimensions, StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';
let size = Dimensions.get('window');
const StoreLocatorViewStyle = StyleSheet.create({
  containerView: {
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  mapView: {
    height: size.height * 0.3,
    backgroundColor: Colors.GREY,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default StoreLocatorViewStyle;
