import {Platform, StyleSheet} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
import * as Fonts from '../../../utilities/Constants/FontConstant';

const EntryStyle = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.WHITE,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
    // paddingTop: Platform.OS == 'ios' ? 10 : -10,
    // paddingBottom: Platform.OS == 'ios' ? 10 : -10,
    height: 60,
    borderRadius: 10,
  },
  leftIcon: {
    flex: 0.1,
    alignSelf: 'center',
    marginLeft: 5,
    resizeMode: 'contain',
    height: 25,
    width: 30,
  },
  rightView: {
    flex: 0.9,
    marginLeft: 5,
    color: Colors.WHITE,
    fontFamily: Fonts.GOTHAM_BOLD,
    fontSize: 20,
  },
});
export default EntryStyle;
