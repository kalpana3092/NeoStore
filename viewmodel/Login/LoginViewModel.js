import LoginService from '../../service/LoginService';
import CommonMethods from '../../utilities/Common/CommonMethods';
import LocalStorageManager from '../../utilities/Common/LocalStorageManager';
import {LocalStorageKeys} from '../../utilities/Constants/StringConstant';

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
          console.log('insideviewmodel', responsedata.data);
          LocalStorageManager.SaveData(
            LocalStorageKeys.kUserData,
            responsedata.data,
          );
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
