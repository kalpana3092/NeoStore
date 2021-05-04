import {StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
import * as Fonts from '../../../utilities/Constants/FontConstant';
const ProductItemStyle = StyleSheet.create({
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
    height: 1.5,
    width: '100%',
    backgroundColor: Colors.L_GREY,
  },

  name: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 15,
    color: Colors.GREY,
  },

  category: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 10,
    color: Colors.GREY,
    marginTop: 8,
  },

  price: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 20,
    color: Colors.APP_BG,
  },

  pricerateView: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default ProductItemStyle;
