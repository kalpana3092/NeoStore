import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ProductDetailStyle from './ProductDetailView.style';
import * as Colors from '../../utilities/Constants/ColorConstant';
const ProductDetailView = ({route, navigation}) => {
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
        <Text>tesc</Text>
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
