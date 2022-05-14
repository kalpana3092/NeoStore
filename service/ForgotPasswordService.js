import APIManager from '../utilities/Common/APIManager';
import APIConstant from '../utilities/Constants/APIConstant';

const ForgotPasswordService = {
  ForgotPassword: (email) => {
    var data = new FormData();
    data.append('email', email);
    const endPoint = APIConstant.forgotPassword;
    return APIManager.CallApi(data, endPoint, 'post', false);
  },
};
export default ForgotPasswordService;
