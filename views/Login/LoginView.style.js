import {StyleSheet} from 'react-native';
import * as Colors from '../../utilities/Constants/ColorConstant';
import * as Fonts from '../../utilities/Constants/FontConstant';
const LoginStyles = StyleSheet.create({
  scrollStyle: {
    // height : '100%',
    backgroundColor: Colors.APP_BG,
    // flexDirection : 'column',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    height: 80,
    width: 80,
    marginBottom: 40,
    marginTop: 10,
  },

  containerView: {
    width: '80%',
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    height: 446,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: Colors.WHITE,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },

  inputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.APP_INPUT,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    margin: 10,
  },

  logoText: {
    color: Colors.BLACK,
    fontSize: 40,
    fontWeight: 'normal',
    marginBottom: 40,
  },
  inputText: {
    flex: 1,
    height: 50,
    color: Colors.WHITE,
    alignItems: 'center',
  },
  forgot: {
    fontSize: 15,
    color: Colors.BLACK,
    fontFamily: Fonts.GOTHAM_BOOK,
  },

  loginButton: {
    width: '80%',
    backgroundColor: Colors.APP_TEXT,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  loginText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: Fonts.GOTHAM_BOLD,
  },

  signupText: {
    color: Colors.APP_TEXT,
    fontSize: 18,
    fontFamily: Fonts.GOTHAM_BOLD,
  },

  signupContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageTextInputStyle: {
    padding: 10,
    margin: 8,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
export default LoginStyles;
