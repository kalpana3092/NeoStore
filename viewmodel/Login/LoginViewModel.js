import LoginService from '../../service/LoginService';
import CommonMethods from '../../utilities/Common/CommonMethods';

const LoginViewModel = {
  ValidateEmail: (email) => {
    return CommonMethods.CheckValidEmail(email);
  },

  ValidatePassword: (password) => {
    return CommonMethods.CheckValidPassword(password);
  },

  ValidateEmptyString: (text) => {
    return CommonMethods.CheckEmptyString(text);
  },

  LoginUser: async (email, password) => {
    const result = await LoginService.LoginUser(email, password).then(
      (responsedata) => {
        if (responsedata.status === 200) {
          console.log('insideviewmodel', responsedata);
          return '';
        } else {
          console.log(responsedata);
          return responsedata.user_msg;
        }
      },
    );
    return result;
  },
};
export default LoginViewModel;
