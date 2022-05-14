import {StyleSheet, Dimensions} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';
const window = Dimensions.get('window');
const profilePicHeight = window.height * 0.2;
const MyAccountStyle = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
  },
  imageHeader: {
    height: profilePicHeight,
    width: profilePicHeight,
    borderRadius: profilePicHeight * 0.5,
    backgroundColor: Colors.WHITE,
  },
  resetView: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.WHITE,
  },
  resetText: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 25,
    color: Colors.L_GREY,
  },
});
export default MyAccountStyle;
