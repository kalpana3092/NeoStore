import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import AddressListStyle from './AddressListView.Style';
import * as ImgConstant from '../../utilities/Constants/ImageConstant';
import RouteConstant from '../../utilities/Constants/RouteConstant';

const AddressListView = (prop) => {
  useEffect(() => {
    prop.navigation.setOptions({
      title: 'Address List',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => prop.navigation.navigate(RouteConstant.AddAddress)}
          style={AddressListStyle.rightHeader}>
          <Image
            source={ImgConstant.IMG_NAVPLUS}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      ),
    });
  }, [prop]);
  return (
    <SafeAreaView>
      <View>
        <Text>tes</Text>
      </View>
    </SafeAreaView>
  );
};
export default AddressListView;
