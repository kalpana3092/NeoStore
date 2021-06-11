import APIManager from '../utilities/Common/APIManager';
import APIConstant from '../utilities/Constants/APIConstant';

const ForgotPasswordService = {
  ForgotPassword: (email) => {
    var data = new FormData();
    data.append('email', email);
    const endPoint = APIConstant.forgotPassword;
    return APIManager.CallPostApi(data, endPoint);
  },
};
export default ForgotPasswordService;
