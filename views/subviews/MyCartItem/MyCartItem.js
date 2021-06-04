import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import * as ImgConstant from '../../../utilities/Constants/ImageConstant';
import MyCartItemStyle from './MyCartItem.style';
import ModalDropdown from 'react-native-modal-dropdown';
import CommonMethods from '../../../utilities/Common/CommonMethods';
const qtyArray = CommonMethods.range(1, 10);

const MyCartItem = (prop) => {
  const [quantity, setQuantity] = useState(prop.qty);
  return (
    <View>
      <View style={MyCartItemStyle.conatinerView}>
        <Image
          style={MyCartItemStyle.image}
          source={ImgConstant.HM_IMG_TABLE}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 5}}>
            <Text style={MyCartItemStyle.name}>{prop.name}</Text>
            <Text style={MyCartItemStyle.category}>({prop.category})</Text>
          </View>
          <View style={MyCartItemStyle.pricerateView}>
            <ModalDropdown
              options={qtyArray}
              dropdownStyle={{width: 60}}
              dropdownTextStyle={[MyCartItemStyle.price, {textAlign: 'center'}]}
              onSelect={(item) => setQuantity(qtyArray[item])}>
              <View style={MyCartItemStyle.qtyView}>
                <Text style={[MyCartItemStyle.price]}>{quantity}</Text>
                <Image
                  style={MyCartItemStyle.arrowimage}
                  source={ImgConstant.MC_IMG_Arrow}
                />
              </View>
            </ModalDropdown>
            <Text style={MyCartItemStyle.price}>{prop.price}</Text>
          </View>
        </View>
      </View>
      <View style={MyCartItemStyle.horizontalLine} />
    </View>
  );
};
export default MyCartItem;
