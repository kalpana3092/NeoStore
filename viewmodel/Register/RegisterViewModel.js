import CommonMethods from '../../utilities/Common/CommonMethods';

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
};
export default RegisterViewModel;
