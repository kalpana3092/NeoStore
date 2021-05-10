import React, {Component} from 'react';
import {View, FlatList, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
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

const HomeView = (prop) => {
  return (
    <SafeAreaView>
      <CarouselCards />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              prop.navigation.navigate(RouteConstant.Product, {
                title: item.title,
              })
            }>
            <View style={HomeStyle.itemContainer}>
              <Image source={item.value} style={HomeStyle.imageStyle} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
};
export default HomeView;