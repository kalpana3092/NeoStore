import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image, Alert} from 'react-native';
import RegisterStyle from '../Register/RegisterView.style';
import MyAccountStyle from './MyAccountView.style';
import EntryField from '../subviews/EntryField/EntryField';
import * as ImageConstant from '../../utilities/Constants/ImageConstant';
import * as Strings from '../../utilities/Constants/StringConstant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RegisterViewModel from '../../viewmodel/Register/RegisterViewModel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RouteConstant from '../../utilities/Constants/RouteConstant';

const MyAccountView = ({route, navigation}) => {
  //1. First name
  const [Fname, SetFname] = useState('');

  //2. Last name
  const [Lname, SetLname] = useState('');

  //3. Email
  const [Email, SetEmail] = useState('');

  //7. Phone Number
  const [PNumber, SetPNumber] = useState('');

  //7. Terms & Condition
  const [dob, SetDOB] = useState('');

  const [isEdit, SetEdit] = useState(true);

  const [navTitle, SetNavTitle] = useState('My Account');

  const PaddingView = () => {
    return <View style={{height: 20}} />;
  };

  const submitButtonClick = () => {
    if (RegisterViewModel.ValidateEmptyString(Fname)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.FNAME);
      return;
    }

    if (RegisterViewModel.ValidateEmptyString(Lname)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.LNAME);
      return;
    }

    if (RegisterViewModel.ValidateEmptyString(Email)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EEMAIL);
      return;
    }

    if (!RegisterViewModel.ValidateEmail(Email)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EMAIL);
      return;
    }

    if (RegisterViewModel.ValidateEmptyString(PNumber)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.PHONE);
      return;
    }

    if (RegisterViewModel.ValidatePhoneNumber(PNumber)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.VPHONE);
      return;
    }

    if (RegisterViewModel.ValidateEmptyString(dob)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.DOB);
      return;
    }
    SetEdit(true);
  };

  const editButtonClick = () => {
    SetEdit(false);
    SetNavTitle('Edit Proflie');
  };

  // let navTitle = route.params.title;
  useEffect(() => {
    if (navTitle != undefined) {
      navigation.setOptions({
        title: navTitle,
      });
    }
  }, [navTitle]);
  return (
    <SafeAreaView style={RegisterStyle.safeArea}>
      <KeyboardAwareScrollView
        style={RegisterStyle.scrollView}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={RegisterStyle.scrollContent}
        scrollEnabled={true}>
        <PaddingView />
        <View style={MyAccountStyle.containerStyle}>
          <Image
            source={ImageConstant.NB_IMG_MALE}
            style={MyAccountStyle.imageHeader}
          />
        </View>
        <PaddingView />
        <EntryField
          icon={ImageConstant.RP_IMG_USERNAME}
          placeholder={Strings.RP_FIRSTNAME}
          isEditable={!isEdit}
          onChangeText={(text) => {
            SetFname(text);
          }}
        />

        <PaddingView />
        <EntryField
          icon={ImageConstant.RP_IMG_USERNAME}
          placeholder={Strings.RP_LASTTNAME}
          isEditable={!isEdit}
          onChangeText={(LastName) => {
            SetLname(LastName);
          }}
        />

        <PaddingView />
        <EntryField
          icon={ImageConstant.HM_IMG_EMAIL}
          placeholder={Strings.LP_PLACEHOLDER_EMAIL}
          isEditable={!isEdit}
          onChangeText={(EmailName) => {
            SetEmail(EmailName);
          }}
          keyboardType={1}
        />
        <PaddingView />
        <EntryField
          icon={ImageConstant.RP_IMG_PHONE}
          placeholder={Strings.RP_PHONE}
          isEditable={!isEdit}
          onChangeText={(Number) => {
            SetPNumber(Number);
          }}
          keyboardType={2}
        />
        <PaddingView />
        <EntryField
          icon={ImageConstant.PF_IMG_DOB}
          placeholder={Strings.RP_DOB}
          isEditable={!isEdit}
          onChangeText={(dob) => {
            SetDOB(dob);
          }}
          keyboardType={2}
        />
        <PaddingView />
        <TouchableOpacity
          style={RegisterStyle.registerView}
          onPress={isEdit ? editButtonClick : submitButtonClick}>
          <Text style={RegisterStyle.registerText}>
            {isEdit ? Strings.RP_EDITPROFILE : Strings.RP_SUBMIT}
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      {isEdit ? (
        <TouchableOpacity
          style={MyAccountStyle.resetView}
          onPress={() => {
            navigation.navigate(RouteConstant.ResetPassword);
          }}>
          <Text style={MyAccountStyle.resetText}>{Strings.RP_RESETPASS}</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};
export default MyAccountView;
