import RegisterService from '../../service/RegisterService';
import CommonMethods from '../../utilities/Common/CommonMethods';
import LocalStorageManager from '../../utilities/Common/LocalStorageManager';
import {LocalStorageKeys} from '../../utilities/Constants/StringConstant';

const RegisterViewModel = {
  ValidateEmail: (email) => {
    return CommonMethods.CheckValidEmail(email);
  },

  ValidatePassword: (password) => {
    return CommonMethods.CheckValidPassword(password);
  },

  ValidateEmptyString: (text) => {
    return CommonMethods.CheckEmptyString(text);
  },

  ValidatePhoneNumber: (text) => {
    return CommonMethods.CheckValidPhNumber(text);
  },

  ValidateConfirmPass: (pass, confmPass) => {
    return CommonMethods.CheckConfirmPassword(pass, confmPass);
  },
  RegisterUser: async (
    fName,
    lName,
    email,
    password,
    cPassword,
    gender,
    phoneNumber,
  ) => {
    const result = await RegisterService.RegisterUser(
      fName,
      lName,
      email,
      password,
      cPassword,
      gender,
      phoneNumber,
    ).then((responsedata) => {
      if (responsedata.status === 200) {
        console.log('insideviewmodel', responsedata);
        LocalStorageManager.SaveData(
          LocalStorageKeys.kUserData,
          responsedata.data,
        );
        return '';
      } else {
        console.log(responsedata);
        return responsedata.user_msg;
      }
    });
    return result;
  },
};
export default RegisterViewModel;
