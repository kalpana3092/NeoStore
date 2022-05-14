import {Dimensions, StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';
let size = Dimensions.get('window');

const ProductDetailStyle = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    height: '100%',
  },

  scrollView: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.LBG_GREY,
  },

  headerView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    padding: 13,
  },

  name: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 20,
    color: Colors.GREY,
  },

  category: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 16,
    color: Colors.GREY,
    marginTop: 8,
  },

  subCategory: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 12,
    color: Colors.GREY,
  },

  price: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 20,
    color: Colors.APP_BG,
  },

  image: {
    height: 40,
    width: 40,
  },

  pricerateView: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceShareView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  detailView: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginLeft: 13,
    marginRight: 13,
    borderWidth: 1,
    borderColor: Colors.EL_GREY,
  },

  horizontalLine: {
    height: 1.5,
    width: '100%',
    backgroundColor: Colors.LBG_GREY,
    marginBottom: 20,
    marginTop: 30,
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
    width: (size.width - 10 - 26) / 2,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontFamily: Fonts.GOTHAM_BOLD,
  },

  detailImage: {
    height: size.height * 0.23,
    width: size.width * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // size - margine * numColumns,
  imageContainer: {
    width: 130,
    marginTop: 8,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1.5,
    marginLeft: 8,
    marginRight: 8,
  },

  productImage: {
    height: '100%',
    width: '100%',
  },
  flatlist: {
    height: 110,
    width: '100%',
  },
  descpView: {
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  despHeader: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 20,
    color: Colors.BLACK,
  },

  despText: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 16,
    color: Colors.MENU_BG,
    marginTop: 8,
  },
});
export default ProductDetailStyle;
