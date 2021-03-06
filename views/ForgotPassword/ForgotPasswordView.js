import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image, Alert} from 'react-native';
import RegisterStyle from '../Register/RegisterView.style';
import EntryField from '../subviews/EntryField/EntryField';
import * as ImageConstant from '../../utilities/Constants/ImageConstant';
import * as Strings from '../../utilities/Constants/StringConstant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RegisterViewModel from '../../viewmodel/Register/RegisterViewModel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RouteConstant from '../../utilities/Constants/RouteConstant';
import ForgotPasswordViewModel from '../../viewmodel/ForgotPassword/ForgotPasswordViewModel';
import NetworkReachability from '../../utilities/Common/NetworkReachability';
import LoaderView from '../subviews/LoaderView/LoaderView';

const ForgotPasswordView = (props) => {
  //1. Email
  const [Email, SetEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const forgotButtonClick = () => {
    if (RegisterViewModel.ValidateEmptyString(Email)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EEMAIL);
      return;
    }

    if (!RegisterViewModel.ValidateEmail(Email)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EMAIL);
      return;
    }
    NetworkReachability.CheckConnectivity().then((state) => {
      if (state.isConnected) {
        setLoading(true);
        ForgotPasswordViewModel.ForgotPassword(Email).then((message) => {
          setLoading(false);
          Alert.alert(Strings.LP_NEOSTORE, message);
        });
      } else {
        Alert.alert(Strings.LP_NEOSTORE, Strings.NO_INTERNET);
      }
    });
  };
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0;
  return (
    <SafeAreaView style={RegisterStyle.safeArea}>
      <LoaderView visible={loading} />
      <KeyboardAwareScrollView
        style={RegisterStyle.scrollView}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={RegisterStyle.scrollContent}
        scrollEnabled={true}>
        <View style={{height: 120}} />
        <Text style={RegisterStyle.heading}>NeoSTORE</Text>
        <View style={{height: 40}} />
        <EntryField
          icon={ImageConstant.HM_IMG_EMAIL}
          placeholder={Strings.LP_PLACEHOLDER_EMAIL}
          onChangeText={(EmailName) => {
            SetEmail(EmailName);
          }}
          keyboardType={1}
        />
        <View style={{height: 30}} />
        <TouchableOpacity
          style={RegisterStyle.registerView}
          onPress={forgotButtonClick}>
          <Text style={RegisterStyle.registerText}>{Strings.RP_SUBMIT}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ForgotPasswordView;
