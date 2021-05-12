import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ProductDetailStyle from './ProductDetailView.style';
import * as Colors from '../../utilities/Constants/ColorConstant';
import CustomRatingView from '../subviews/CustomRatingView/CustomRatingView';
import * as ImgConstant from '../../utilities/Constants/ImageConstant';
const data = [
  {
    id: '1',
    name: ImgConstant.HM_IMG_SLIDER1,
  },
  {
    id: '2',
    name: ImgConstant.HM_IMG_SLIDER2,
  },
  {
    id: '3',
    name: ImgConstant.HM_IMG_SLIDER3,
  },
];
const ProductDetailView = ({route, navigation}) => {
  const [selectedId, setSelectedId] = useState('1');
  const [selectedImage, setSelectedImage] = useState(
    ImgConstant.HM_IMG_SLIDER1,
  );
  const navTitle = route.params.title;
  useEffect(() => {
    if (navTitle != undefined) {
      navigation.setOptions({
        title: route.params.title,
      });
    }
  }, [navTitle]);
  return (
    <SafeAreaView style={ProductDetailStyle.mainView}>
      <ScrollView style={ProductDetailStyle.scrollView}>
        <View style={ProductDetailStyle.headerView}>
          <Text style={ProductDetailStyle.name}>{navTitle}</Text>
          <Text style={ProductDetailStyle.category}>Category - Table</Text>
          <View style={ProductDetailStyle.pricerateView}>
            <Text style={ProductDetailStyle.subCategory}>
              Future furniture center
            </Text>
            <CustomRatingView
              maxRating={[1, 2, 3, 4, 5]}
              defaultRating={4}
              disabled={true}
              imageSize={20}
            />
          </View>
        </View>
        <View style={ProductDetailStyle.detailView}>
          <View style={ProductDetailStyle.priceShareView}>
            <Text style={ProductDetailStyle.price}>RS. 27,000</Text>
            <Image
              style={ProductDetailStyle.image}
              source={ImgConstant.PD_IMG_SHARE}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={ProductDetailStyle.detailImage}
              source={selectedImage}
            />
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(data) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedImage(data.item.name);
                  setSelectedId(data.item.id);
                }}>
                <View
                  style={[
                    ProductDetailStyle.imageContainer,
                    {
                      borderColor:
                        data.item.id === selectedId
                          ? Colors.APP_TEXT
                          : Colors.L_GREY,
                    },
                  ]}>
                  <Image
                    style={ProductDetailStyle.productImage}
                    source={data.item.name}
                  />
                </View>
              </TouchableOpacity>
            )}
            style={ProductDetailStyle.flatlist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <View style={ProductDetailStyle.horizontalLine} />
          <View style={ProductDetailStyle.descpView}>
            <Text style={ProductDetailStyle.despHeader}>DESCRIPTION</Text>
            <Text style={ProductDetailStyle.despText}>
              Lorem ipsum dolor sit er elit lamet, consectetaur cillium
              adipisicing pecu, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{'\n'}Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nam liber te
              conscient to factor tum poen legum odioque civiuda.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={ProductDetailStyle.footerView}>
        <TouchableOpacity
          style={[
            ProductDetailStyle.buttonView,
            {marginRight: 5, backgroundColor: Colors.APP_TEXT},
          ]}
          onPress={() => console.log('buy')}>
          <Text style={[ProductDetailStyle.buttonText, {color: Colors.WHITE}]}>
            BUY NOW
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            ProductDetailStyle.buttonView,
            {marginLeft: 5, backgroundColor: Colors.EL_GREY},
          ]}
          onPress={() => console.log('rate')}>
          <Text style={[ProductDetailStyle.buttonText, {color: Colors.GREY}]}>
            RATE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetailView;
