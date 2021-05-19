import {StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';
const MyCartStyle = StyleSheet.create({
  orderView: {
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: Colors.APP_BG,
    marginTop: 30,
  },
  orderText: {
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 25,
    color: Colors.WHITE,
  },
});
export default MyCartStyle;
