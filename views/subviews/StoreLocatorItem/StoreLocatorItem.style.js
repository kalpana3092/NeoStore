import {StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
import * as Fonts from '../../../utilities/Constants/FontConstant';
const StoreLocatorItemStyle = StyleSheet.create({
  conatinerView: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
    alignContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 25,
    width: 25,
    marginLeft: 15,
    marginRight: 15,
  },

  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.L_GREY,
  },

  storeName: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 20,
    color: Colors.GREY,
  },

  address: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 16,
    color: Colors.GREY,
    marginTop: 5,
  },

  textContentView: {
    marginTop: 15,
    marginBottom: 15,
  },
});
export default StoreLocatorItemStyle;
