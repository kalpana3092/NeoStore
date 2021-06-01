import {StyleSheet, Dimensions} from 'react-native';

import * as Colors from '../../../../utilities/Constants/ColorConstant';
import * as Fonts from '../../../../utilities/Constants/FontConstant';

const size = Dimensions.get('window');
const QtyRatePopupStyle = StyleSheet.create({
  blurBgView: {
    backgroundColor: 'black',
    opacity: 0.5,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: size.width * 0.9,
    borderRadius: 6,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  backgroundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  textStyle: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 25,
    color: Colors.PopupTitleColor,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },

  enterTextStyle: {
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 20,
    color: Colors.PopupTitleColor,
    textAlign: 'center',
  },

  imageConatiner: {
    alignItems: 'center',
    borderColor: Colors.L_GREY,
    borderWidth: 2,
  },

  detailImage: {
    height: size.height * 0.23,
    width: size.width * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputContainer: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: Colors.EL_GREY,
  },
  textView: {
    flex: 1,
    color: Colors.MENU_BG,
    fontFamily: Fonts.GOTHAM_BOOK,
    fontSize: 20,
    marginHorizontal: 10,
    textAlign: 'center',
  },

  submitButtonView: {
    height: 55,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: Colors.APP_BG,
  },

  saveButtonText: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 25,
    color: Colors.WHITE,
  },
});

export default QtyRatePopupStyle;
