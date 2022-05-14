import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import * as ImgConstant from '../../../utilities/Constants/ImageConstant';
import AddressListItemStyle from './AddressListItem.style';

const AddressListItem = (prop) => {
  return (
    <View style={AddressListItemStyle.conatinerView}>
      <TouchableOpacity
        onPress={() => {
          prop.onClickRadio(prop.id);
        }}>
        <Image
          style={AddressListItemStyle.image}
          source={
            prop.id == prop.selectedAddress
              ? ImgConstant.AD_IMG_RADIOSELECTED
              : ImgConstant.AD_IMG_RADIOUNSELECTED
          }
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={AddressListItemStyle.textContentView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
              marginHorizontal: 8,
            }}>
            <Text style={AddressListItemStyle.storeName}>{prop.name}</Text>
            <TouchableOpacity
              onPress={() => {
                prop.onClickDelete(prop.id);
              }}>
              <Image
                style={AddressListItemStyle.removeImage}
                source={ImgConstant.AD_IMG_REMOVE}
              />
            </TouchableOpacity>
          </View>
          <Text style={AddressListItemStyle.address}>{prop.address}</Text>
        </View>
      </View>
    </View>
  );
};
export default AddressListItem;
