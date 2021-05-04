import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LoginStyles from '../Login/LoginView.style';
import LoginViewModel from '../../viewmodel/Login/LoginViewModel';
import * as ImageConstant from '../../utilities/Constants/ImageConstant';
import * as Strings from '../../utilities/Constants/StringConstant';
import {ScrollView} from 'react-native-gesture-handler';
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    this.props.navigation.setOptions({headerShown: false});
  }
  /**
   * Called on click of login
   */
  onClickLoginButton = () => {
    if (LoginViewModel.ValidateEmptyString(this.state.email)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EEMAIL);
      return;
    }

    if (!LoginViewModel.ValidateEmail(this.state.email)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EMAIL);
      return;
    }

    if (LoginViewModel.ValidateEmptyString(this.state.password)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EPASSWORD);
      return;
    }

    if (LoginViewModel.ValidatePassword(this.state.password)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_PASSWORD);
      return;
    }

    this.props.navigation.navigate('Home');
  };

  /**
   * Called on click of signup
   */
  onClickSignupButton = () => {
    this.props.navigation.navigate('Register');
  };

  /**
   * Called on click of forgot password
   */
  onClickForgotPassButton = () => {
    alert('send link to email');
  };

  render() {
    return (
      <SafeAreaView style={LoginStyles.container}>
        {/* <ScrollView style = {LoginStyles.scrollStyle} */}
        <Image
          style={LoginStyles.imageContainer}
          source={ImageConstant.HM_IMG_LOGO}
        />
        <View style={LoginStyles.containerView}>
          <Text style={LoginStyles.logoText}> {Strings.LP_SIGNIN} </Text>
          <View style={LoginStyles.inputView}>
            <Image
              source={ImageConstant.HM_IMG_EMAIL}
              style={LoginStyles.imageTextInputStyle}
            />
            <TextInput
              style={LoginStyles.inputText}
              placeholder={Strings.LP_PLACEHOLDER_EMAIL}
              placeholderTextColor="white"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({email: email})}
              autoCorrect={false}
            />
          </View>
          <View style={LoginStyles.inputView}>
            <Image
              source={ImageConstant.HM_IMG_PASS}
              style={LoginStyles.imageTextInputStyle}
            />
            <TextInput
              style={LoginStyles.inputText}
              secureTextEntry
              placeholder={Strings.LP_PLACEHOLDER_PASSWORD}
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <TouchableOpacity onPress={this.onClickForgotPassButton}>
            <Text style={LoginStyles.forgot}>{Strings.LP_FORGOT}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={LoginStyles.loginButton}
            onPress={this.onClickLoginButton}>
            <Text style={LoginStyles.loginText}>{Strings.LP_LOGIN}</Text>
          </TouchableOpacity>
          <View style={LoginStyles.signupContainer}>
            <Text>{Strings.LP_DONTHAVEACC} </Text>
            <TouchableOpacity onPress={this.onClickSignupButton}>
              <Text style={LoginStyles.signupText}>{Strings.LP_SIGNUP}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* //  </ScrollView>  */}
      </SafeAreaView>
    );
  }
}
