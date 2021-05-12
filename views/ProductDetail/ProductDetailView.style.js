import {Dimensions, StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';
let width = Dimensions.get('window').width;
const ProductDetailStyle = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    height: '100%',
  },

  scrollView: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.EL_GREY,
  },
  footerView: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonView: {
    width: (width - 10 - 26) / 2,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontFamily: Fonts.GOTHAM_BOLD,
  },
});
export default ProductDetailStyle;
