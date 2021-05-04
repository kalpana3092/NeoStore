import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image, Alert} from 'react-native';
import RegisterStyle from '../Register/RegisterView.style';
import EntryField from '../subviews/EntryField';
import * as ImageConstant from '../../utilities/Constants/ImageConstant';
import * as Strings from '../../utilities/Constants/StringConstant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RegisterViewModel from '../../viewmodel/Register/RegisterViewModel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const RegisterView = (props) => {
  //1. First name
  const [Fname, SetFname] = useState('');

  //2. Last name
  const [Lname, SetLname] = useState('');

  //3. Email
  const [Email, SetEmail] = useState('');

  //4. Password
  const [Password, SetPassword] = useState('');

  //5. Confirm Password
  const [CPassword, SetCPassword] = useState('');

  //6. Gender
  const [Gender, SetGender] = useState('');

  //7. Phone Number
  const [PNumber, SetPNumber] = useState('');

  //7. Terms & Condition
  const [TermsSelected, SetTermsCondition] = useState(false);

  const PaddingView = () => {
    return <View style={{height: 20}} />;
  };

  const GenderView = (props) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'center'}}
        onPress={() => {
          if (Gender != '') {
            if (Gender != props.title) {
              SetGender(props.title);
            } else {
              SetGender(Gender);
            }
          } else {
            SetGender(props.title);
          }
        }}>
        <Image
          style={{height: 20, width: 20, alignSelf: 'center'}}
          source={
            Gender == props.title
              ? ImageConstant.RP_IMG_CHECK
              : ImageConstant.RP_IMG_UNCHECK
          }
        />
        <View style={{width: 10}} />
        <Text style={RegisterStyle.genderValueText}>{props.title}</Text>
      </TouchableOpacity>
    );
  };

  const toggleTermsFlag = () => {
    SetTermsCondition(!TermsSelected);
  };

  const registerButtonClick = () => {
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

    if (RegisterViewModel.ValidateEmptyString(Password)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EPASSWORD);
      return;
    }

    if (RegisterViewModel.ValidatePassword(Password)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_PASSWORD);
      return;
    }

    if (!RegisterViewModel.ValidateConfirmPass(Password, CPassword)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.CPASS);
      return;
    }

    if (Gender === '') {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.GENDER);
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

    if (!TermsSelected) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ERROR_MSG.REGISTER.TERMS);
      return;
    }
  };
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0;
  return (
    <SafeAreaView style={RegisterStyle.safeArea}>
      <KeyboardAwareScrollView
        style={RegisterStyle.scrollView}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={RegisterStyle.scrollContent}
        scrollEnabled={true}>
        <Text style={RegisterStyle.heading}>NeoSTORE</Text>
        <PaddingView />

        <PaddingView />
        <EntryField
          icon={ImageConstant.RP_IMG_USERNAME}
          placeholder={Strings.RP_FIRSTNAME}
          onChangeText={(text) => {
            SetFname(text);
          }}
        />

        <PaddingView />
        <EntryField
          icon={ImageConstant.RP_IMG_USERNAME}
          placeholder={Strings.RP_LASTTNAME}
          onChangeText={(LastName) => {
            SetLname(LastName);
          }}
        />

        <PaddingView />
        <EntryField
          icon={ImageConstant.HM_IMG_EMAIL}
          placeholder={Strings.LP_PLACEHOLDER_EMAIL}
          onChangeText={(EmailName) => {
            SetEmail(EmailName);
          }}
          keyboardType={1}
        />

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
          placeholder={Strings.RP_CONFIRMPASSWORD}
          onChangeText={(ConfPassword) => {
            SetCPassword(ConfPassword);
          }}
          keyboardType={1}
          isPassword={true}
        />

        <PaddingView />
        <View style={RegisterStyle.genderView}>
          <Text style={RegisterStyle.genderText}>Gender</Text>
          <View style={{width: 30}} />
          <GenderView title={'Male'} />
          <View style={{width: 30}} />
          <GenderView title={'Female'} />
        </View>

        <PaddingView />
        <EntryField
          icon={ImageConstant.RP_IMG_PHONE}
          placeholder={Strings.RP_PHONE}
          onChangeText={(Number) => {
            SetPNumber(Number);
          }}
          keyboardType={2}
        />

        <PaddingView />
        <View style={RegisterStyle.termsView}>
          <TouchableOpacity
            style={RegisterStyle.checkbox}
            onPress={toggleTermsFlag}>
            <Image
              style={RegisterStyle.checkbox}
              source={
                TermsSelected
                  ? ImageConstant.RP_IMG_CHECKTERMS
                  : ImageConstant.RP_IMG_UNCHECKTERMS
              }
            />
          </TouchableOpacity>
          <View style={{width: 20}} />
          <Text style={RegisterStyle.termsText}>{Strings.RP_TERMS_1}</Text>
          <TouchableOpacity
            style={{flexDirection: 'column'}}
            onPress={() => {
              console.log('Terms selected');
            }}>
            <Text style={RegisterStyle.termsCondText}>
              {Strings.RP_TERMS_2}
            </Text>
          </TouchableOpacity>
        </View>
        <PaddingView />
        <TouchableOpacity
          style={RegisterStyle.registerView}
          onPress={registerButtonClick}>
          <Text style={RegisterStyle.registerText}>{Strings.RP_REGISTER}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default RegisterView;
