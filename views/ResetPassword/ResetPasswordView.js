import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image, Alert} from 'react-native';
import RegisterStyle from '../Register/RegisterView.style';
import EntryField from '../subviews/EntryField/EntryField';
import * as ImageConstant from '../../utilities/Constants/ImageConstant';
import * as Strings from '../../utilities/Constants/StringConstant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RegisterViewModel from '../../viewmodel/Register/RegisterViewModel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RouteConstant from '../../utilities/Constants/RouteConstant';

const ResetPasswordView = (props) => {
  //1. Password
  const [Password, SetPassword] = useState('');

  //2. Password
  const [NewPassword, SetNewPassword] = useState('');

  //3. Confirm Password
  const [CPassword, SetCPassword] = useState('');

  useEffect(() => {
    // if (navTitle != undefined) {
    props.navigation.setOptions({
      title: 'Reset Password',
    });
    // }
  }, []);

  const PaddingView = () => {
    return <View style={{height: 20}} />;
  };

  const resetButtonClick = () => {
    if (RegisterViewModel.ValidateEmptyString(Password)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EPASSWORD);
      return;
    }

    if (RegisterViewModel.ValidatePassword(Password)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_PASSWORD);
      return;
    }

    if (RegisterViewModel.ValidateEmptyString(NewPassword)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_ENEWPASSWORD);
      return;
    }

    if (RegisterViewModel.ValidatePassword(NewPassword)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_PASSWORD);
      return;
    }

    if (!RegisterViewModel.ValidateConfirmPass(NewPassword, CPassword)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.CPASS);
      return;
    }
    Alert.alert(Strings.LP_NEOSTORE, 'Password reset');
  };
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0;
  return (
    <SafeAreaView style={RegisterStyle.safeArea}>
      <KeyboardAwareScrollView
        style={RegisterStyle.scrollView}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={RegisterStyle.scrollContent}
        scrollEnabled={true}>
        <PaddingView />
        <PaddingView />
        <PaddingView />
        <Text style={RegisterStyle.heading}>NeoSTORE</Text>
        <PaddingView />
        <PaddingView />
        <EntryField
          icon={ImageConstant.HM_IMG_PASS}
          placeholder={Strings.RP_PASSWORD}
          onChangeText={(Password) => {
            SetPassword(Password);
          }}
          keyboardType={1}
          isPassword={true}
        />

        <PaddingView />
        <EntryField
          icon={ImageConstant.HM_IMG_PASS}
          placeholder={Strings.RP_NEWPASSWORD}
          onChangeText={(NewPassword) => {
            SetNewPassword(NewPassword);
          }}
          keyboardType={1}
          isPassword={true}
        />

        <PaddingView />
        <EntryField
          icon={ImageConstant.HM_IMG_PASS}
          placeholder={Strings.RP_CONFIRMPASSWORD}
          onChangeText={(ConfPassword) => {
            SetCPassword(ConfPassword);
          }}
          keyboardType={1}
          isPassword={true}
        />

        <PaddingView />
        <TouchableOpacity
          style={RegisterStyle.registerView}
          onPress={resetButtonClick}>
          <Text style={RegisterStyle.registerText}>{Strings.RP_RESETPASS}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ResetPasswordView;
