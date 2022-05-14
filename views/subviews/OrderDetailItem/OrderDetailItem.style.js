import {StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
import * as Fonts from '../../../utilities/Constants/FontConstant';

const OrderDetailItemStyle = StyleSheet.create({
  conatinerView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10,
  },

  image: {
    height: 100,
    width: 100,
    marginLeft: 15,
    marginRight: 15,
  },

  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.EL_GREY,
  },

  name: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 20,
    color: Colors.OrderColor,
  },

  category: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 15,
    color: Colors.CategoryColor,
    marginTop: 5,
  },

  price: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 20,
    color: Colors.MENU_BG,
  },

  pricerateView: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default OrderDetailItemStyle;
