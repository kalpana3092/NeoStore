import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import AddressStyle from './AddressView.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Strings from '../../utilities/Constants/StringConstant';
import * as Colors from '../../utilities/Constants/ColorConstant';
import AddressViewModel from '../../viewmodel/Address/AddressViewModel';

const AddressEntryField = (propData) => {
  return (
    <View style={{flex: 1}}>
      <Text style={AddressStyle.textContainer}>{propData.headerTitle}</Text>
      <View
        style={[
          AddressStyle.container,
          {
            height: propData.isMultiline ? 120 : 50,
            paddingVertical: propData.isMultiline ? 10 : 0,
          },
        ]}>
        <TextInput
          style={AddressStyle.textView}
          placeholder={propData.placeholder}
          placeholderTextColor={Colors.EL_GREY}
          autoCorrect={false}
          keyboardType={propData.keyboardType}
          onChangeText={propData.onChangeText}
          multiline={propData.isMultiline}
        />
      </View>
    </View>
  );
};
const AddressView = (prop) => {
  //1. First name
  const [address, SetAddress] = useState('');
  const [landmark, SetLandmark] = useState('');
  const [city, SetCity] = useState('');
  const [state, SetState] = useState('');
  const [zipcode, SetZipcode] = useState('');
  const [country, SetCountry] = useState('');

  const saveButtonClick = () => {
    if (AddressViewModel.ValidateEmptyString(address)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.ADDRESS.ADDRESS);
      return;
    }
    if (AddressViewModel.ValidateEmptyString(landmark)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.ADDRESS.LANDMARK);
      return;
    }
    if (AddressViewModel.ValidateEmptyString(city)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.ADDRESS.CITY);
      return;
    }
    if (AddressViewModel.ValidateEmptyString(state)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.ADDRESS.STATE);
      return;
    }
    if (AddressViewModel.ValidateEmptyString(zipcode)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.ADDRESS.ZIPCODE);
      return;
    }
    if (!AddressViewModel.ValidateNumber(zipcode)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.ADDRESS.VALIDZIP);
      return;
    }
    if (AddressViewModel.ValidateZipcodeNumber(zipcode)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.ADDRESS.VALIDZIP);
      return;
    }
    if (AddressViewModel.ValidateEmptyString(country)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.ADDRESS.COUNTRY);
      return;
    }
    prop.navigation.goBack();
  };

  const PaddingView = () => {
    return <View style={{height: 20}} />;
  };
  const HorizontalPaddingView = () => {
    return <View style={{width: 15}} />;
  };
  useEffect(() => {
    prop.navigation.setOptions({
      title: 'Add Address',
    });
  }, [prop]);
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        style={AddressStyle.scrollView}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={AddressStyle.scrollContent}
        scrollEnabled={true}>
        <View style={{marginHorizontal: 15}}>
          <PaddingView />
          <AddressEntryField
            headerTitle={Strings.AD_ADD}
            placeholder={Strings.AD_PLACEHOLDERADD}
            keyboardType="default"
            isMultiline={true}
            onChangeText={(address) => {
              SetAddress(address);
            }}
          />
          <PaddingView />
          <AddressEntryField
            headerTitle={Strings.AD_LANDMARK}
            placeholder={Strings.AD_PLACEHOLDERLANDMARK}
            keyboardType="default"
            isMultiline={false}
            onChangeText={(landmark) => {
              SetLandmark(landmark);
            }}
          />
          <PaddingView />
          <View style={AddressStyle.horizontalContainer}>
            <AddressEntryField
              headerTitle={Strings.AD_CITY}
              placeholder={Strings.AD_PLACEHOLDERCITY}
              keyboardType="default"
              isMultiline={false}
              onChangeText={(city) => {
                SetCity(city);
              }}
            />
            <HorizontalPaddingView />
            <AddressEntryField
              headerTitle={Strings.AD_STATE}
              placeholder={Strings.AD_PLACEHOLDERSTATE}
              keyboardType="default"
              isMultiline={false}
              onChangeText={(state) => {
                SetState(state);
              }}
            />
          </View>
          <PaddingView />
          <View style={AddressStyle.horizontalContainer}>
            <AddressEntryField
              headerTitle={Strings.AD_ZIPCODE}
              placeholder={Strings.AD_PLACEHOLDERZIPCODE}
              keyboardType="number-pad"
              isMultiline={false}
              onChangeText={(zipcode) => {
                SetZipcode(zipcode);
              }}
            />
            <HorizontalPaddingView />
            <AddressEntryField
              headerTitle={Strings.AD_COUNTRY}
              placeholder={Strings.AD_PLACEHOLDERCOUNTRY}
              keyboardType="default"
              isMultiline={false}
              onChangeText={(country) => {
                SetCountry(country);
              }}
            />
          </View>
        </View>
        <PaddingView />
        <PaddingView />
        <TouchableOpacity
          style={AddressStyle.saveButtonView}
          onPress={saveButtonClick}>
          <Text style={AddressStyle.saveButtonText}>{Strings.AD_SAVEADD}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default AddressView;
