import ForgotPasswordService from '../../service/ForgotPasswordService';

const ForgotPasswordViewModel = {
  ForgotPassword: async (email) => {
    const result = await ForgotPasswordService.ForgotPassword(email).then(
      (responseData) => {
        console.log(responseData);
        return responseData.user_msg;
      },
    );
    return result;
  },
};
export default ForgotPasswordViewModel;
