import ResetPasswordService from '../../service/ResetPasswordService';

const ResetPasswordViewModel = {
  ChangePassword: async (oldPass, password, cPass) => {
    const result = ResetPasswordService.ResetPassword(
      oldPass,
      password,
      cPass,
    ).then((responseData) => {
      return responseData.user_msg;
    });
    return result;
  },
};
export default ResetPasswordViewModel;
