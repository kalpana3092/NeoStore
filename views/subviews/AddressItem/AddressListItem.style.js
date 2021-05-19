import {StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
import * as Fonts from '../../../utilities/Constants/FontConstant';
const AddressListItemStyle = StyleSheet.create({
  conatinerView: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 15,
    alignContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 25,
    width: 25,
    marginLeft: 15,
    marginRight: 15,
  },

  removeImage: {
    height: 20,
    width: 20,
  },

  storeName: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 22,
    color: Colors.MENU_BG,
  },

  address: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 15,
    color: Colors.MENU_BG,
    margin: 8,
  },

  textContentView: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: Colors.EL_GREY,
    borderWidth: 1,
  },
});
export default AddressListItemStyle;
