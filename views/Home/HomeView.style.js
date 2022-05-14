import {StyleSheet, Dimensions} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
const size = Dimensions.get('window').width / 2;
const numColumns = 2;
const margine = 8;

const HomeStyle = StyleSheet.create({
  itemContainer: {
    width: size - margine * numColumns,
    height: size - margine * numColumns,
    margin: margine,
    backgroundColor: Colors.APP_BG,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {
    height: '100%',
    width: '100%',
  },
});

export default HomeStyle;
