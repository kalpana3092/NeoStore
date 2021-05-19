import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AddressListStyle from './AddressListView.Style';
import MyCartStyle from '../MyCart/MyCartView.style';
import * as ImgConstant from '../../utilities/Constants/ImageConstant';
import RouteConstant from '../../utilities/Constants/RouteConstant';
import * as Strings from '../../utilities/Constants/StringConstant';
import AddressListItem from '../subviews/AddressItem/AddressListItem';
const data = [
  {
    id: '1',
    name: 'Glen Dmello',
    address:
      '4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028',
  },
  {
    id: '2',
    name: 'Glen Dmello',
    address:
      '4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028',
  },
  {
    id: '3',
    name: 'Glen Dmello',
    address:
      '4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028',
  },
];
const AddressListView = (prop) => {
  const [selectedAddress, SetSelectedAddress] = useState('-1');
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
      <View style={AddressListStyle.mainView}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View>
              <Text style={AddressListStyle.shippingAddressText}>
                Shipping Address
              </Text>
            </View>
          }
          ListFooterComponent={
            <View>
              <TouchableOpacity
                style={MyCartStyle.orderView}
                onPress={() => {
                  prop.navigation.navigate(RouteConstant.AddressList);
                }}>
                <Text style={MyCartStyle.orderText}>{Strings.PLACE_ORDER}</Text>
              </TouchableOpacity>
            </View>
          }
          renderItem={(data) => (
            <AddressListItem
              id={data.item.id}
              selectedAddress={selectedAddress}
              name={data.item.name}
              address={data.item.address}
              onClickDelete={(id) => {
                console.log(id);
              }}
              onClickRadio={(id) => {
                SetSelectedAddress(id);
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default AddressListView;
