import {StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
const LoaderViewStyle = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurbg: {
    backgroundColor: Colors.BLACK,
    opacity: 0.5,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    height: 100,
    width: 100,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
export default LoaderViewStyle;
