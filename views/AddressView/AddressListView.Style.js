import {StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';
const AddressListStyle = StyleSheet.create({
  rightHeader: {
    width: 64,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainView: {
    backgroundColor: Colors.WHITE,
    height: '100%',
  },

  totalText: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 20,
    color: Colors.BLACK,
  },

  shippingAddressText: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 25,
    color: Colors.MENU_BG,
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
export default AddressListStyle;
