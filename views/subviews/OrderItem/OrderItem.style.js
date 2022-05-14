import {StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
import * as Fonts from '../../../utilities/Constants/FontConstant';
const OrderItemStyle = StyleSheet.create({
  conatinerView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
  },

  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.EL_GREY,
  },

  order: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 18,
    color: Colors.OrderColor,
  },

  orderDate: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 14,
    color: Colors.MENU_BG,
  },

  priceView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  price: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 20,
    color: Colors.MENU_BG,
  },

  strokeLine: {
    height: 0.8,
    width: '60%',
    backgroundColor: Colors.EL_GREY,
    marginTop: 15,
    marginBottom: 15,
  },
});
export default OrderItemStyle;
