import {StyleSheet, Platform} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';
const AddressStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.LBG_GREY,
    height: '100%',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    flexDirection: 'row',
  },

  textContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    color: Colors.MENU_BG,
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 18,
  },

  textView: {
    flex: 1,
    color: Colors.MENU_BG,
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 20,
    marginHorizontal: 10,
  },
  saveButtonView: {
    height: 55,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: Colors.APP_BG,
  },

  saveButtonText: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 25,
    color: Colors.WHITE,
  },

  horizontalContainer: {
    flexDirection: 'row',
  },
});
export default AddressStyle;
