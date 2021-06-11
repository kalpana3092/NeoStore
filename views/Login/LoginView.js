import React, {useState} from 'react';
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
import RouteConstant from '../../utilities/Constants/RouteConstant';
import NetworkReachability from '../../utilities/Common/NetworkReachability';
import LoaderView from '../subviews/LoaderView/LoaderView';
import {useEffect} from 'react';

const LoginView = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //   };
  // }
  // componentDidMount() {
  //   this.props.navigation.setOptions({headerShown: false});
  // }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    });
  }, []);
  /**
   * Called on click of login
   */
  onClickLoginButton = () => {
    if (LoginViewModel.ValidateEmptyString(email)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EEMAIL);
      return;
    }

    if (!LoginViewModel.ValidateEmail(email)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EMAIL);
      return;
    }

    if (LoginViewModel.ValidateEmptyString(password)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_EPASSWORD);
      return;
    }

    if (LoginViewModel.ValidatePassword(password)) {
      Alert.alert(Strings.LP_NEOSTORE, Strings.ER_PASSWORD);
      return;
    }
    NetworkReachability.CheckConnectivity().then((state) => {
      if (state.isConnected) {
        setLoading(true);
        LoginViewModel.LoginUser(email, password).then((errorMsg) => {
          setLoading(false);
          if (errorMsg != '') {
            Alert.alert(Strings.LP_NEOSTORE, errorMsg);
          }
        });
      } else {
        Alert.alert(Strings.LP_NEOSTORE, Strings.NO_INTERNET);
      }
    });
  };

  /**
   * Called on click of signup
   */
  onClickSignupButton = () => {
    props.navigation.navigate(RouteConstant.Register);
  };

  /**
   * Called on click of forgot password
   */
  onClickForgotPassButton = () => {
    props.navigation.navigate(RouteConstant.ForgotPassword);
  };

  return (
    <SafeAreaView style={LoginStyles.container}>
      {/* <ScrollView style = {LoginStyles.scrollStyle} */}
      <LoaderView visible={isLoading} />
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
            onChangeText={(email) => setEmail(email)}
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
            textContentType="oneTimeCode"
            onChangeText={(text) => setPassword(text)}
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
};
export default LoginView;
