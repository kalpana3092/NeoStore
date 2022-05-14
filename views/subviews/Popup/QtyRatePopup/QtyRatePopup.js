import React, {useState} from 'react';
import QtyRatePopupStyle from './QtyRatePopup.style';
import {Modal, View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-gesture-handler';
import {
  RP_SUBMIT,
  ScreenNames,
  RATE_NOW,
} from '../../../../utilities/Constants/StringConstant';
import CustomRatingView from '../../CustomRatingView/CustomRatingView';

const QtyRatePopup = (props) => {
  const [quantity, setQuantity] = useState('');
  const submitButtonClick = () => {
    props.onClose(quantity);
  };
  return (
    <KeyboardAwareScrollView
      style={QtyRatePopupStyle.scrollView}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.isVisible}
        onRequestClose={() => {
          props.onClose(quantity);
        }}
        style={QtyRatePopupStyle.modalStyle}>
        <View style={QtyRatePopupStyle.blurBgView}></View>
        <View style={QtyRatePopupStyle.backgroundContainer}>
          <View style={QtyRatePopupStyle.container}>
            <View style={{height: 33}} />
            <Text style={QtyRatePopupStyle.textStyle}>{props.name}</Text>
            <View style={{height: 33}} />
            <View style={QtyRatePopupStyle.imageConatiner}>
              <Image
                style={QtyRatePopupStyle.detailImage}
                source={props.image}
              />
            </View>
            <View style={{height: 33}} />
            {props.screenType === ScreenNames.ratePopup ? (
              <View>
                <View style={{height: 22}} />
                <CustomRatingView
                  maxRating={[1, 2, 3, 4, 5]}
                  defaultRating={3}
                  disabled={false}
                  imageSize={50}
                />
                <View style={{height: 22}} />
              </View>
            ) : (
              <View>
                <Text style={QtyRatePopupStyle.enterTextStyle}>Enter Qty</Text>
                <View style={{height: 22}} />
                <View style={QtyRatePopupStyle.textInputContainer}>
                  <TextInput
                    style={QtyRatePopupStyle.textView}
                    autoCorrect={false}
                    keyboardType="number-pad"
                    onChangeText={(qty) => {
                      setQuantity(qty);
                    }}
                  />
                </View>
              </View>
            )}

            <View style={{height: 22}} />
            <TouchableOpacity
              style={QtyRatePopupStyle.submitButtonView}
              onPress={submitButtonClick}>
              <Text style={QtyRatePopupStyle.saveButtonText}>
                {props.screenType === ScreenNames.ratePopup
                  ? RATE_NOW
                  : RP_SUBMIT}
              </Text>
            </TouchableOpacity>
            <View style={{height: 35}} />
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};
export default QtyRatePopup;
