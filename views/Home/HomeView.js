import React, {Component, useEffect} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import {WHITE} from '../../utilities/Constants/ColorConstant';
import * as ImageConstant from '../../utilities/Constants/ImageConstant';
import RouteConstant from '../../utilities/Constants/RouteConstant';
import HomeStyle from '../Home/HomeView.style';
import CarouselCards from '../subviews/CarouselCard/CarouselCards';

const data = [
  {id: 'a', value: ImageConstant.HM_IMG_CHAIR, title: 'Chairs'},
  {id: 'b', value: ImageConstant.HM_IMG_CUPBOARD, title: 'Cupboards'},
  {id: 'c', value: ImageConstant.HM_IMG_SOFA, title: 'Sofas'},
  {id: 'd', value: ImageConstant.HM_IMG_TABLE, title: 'Tables'},
];
const numColumns = 2;
const size = Dimensions.get('window');
const HomeView = (prop) => {
  const headerHeight = useHeaderHeight();
  const safeareainsets = useSafeAreaInsets();
  const height =
    size.height -
    (size.width +
      20 +
      headerHeight +
      (Platform.OS === 'android' ? StatusBar.currentHeight : 0) +
      safeareainsets.bottom);
  return (
    <SafeAreaView>
      <CarouselCards viewHeight={height} />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableHighlight
            activeOpacity={1.0}
            underlayColor={WHITE}
            onPress={() =>
              prop.navigation.navigate(RouteConstant.Product, {
                title: item.title,
              })
            }>
            <View style={HomeStyle.itemContainer}>
              <Image source={item.value} style={HomeStyle.imageStyle} />
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
};
export default HomeView;
