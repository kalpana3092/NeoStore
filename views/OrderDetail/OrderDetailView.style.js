import {StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';

const OrderDetailStyle = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    height: '100%',
  },

  footerView: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    width: '100%',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  totalText: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 20,
    color: Colors.BLACK,
  },

  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.EL_GREY,
  },
});
export default OrderDetailStyle;
