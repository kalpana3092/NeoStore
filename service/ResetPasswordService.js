import APIManager from '../utilities/Common/APIManager';
import APIConstant from '../utilities/Constants/APIConstant';

const ResetPasswordService = {
  ResetPassword: (oldPass, password, cPass) => {
    var data = new FormData();
    data.append('old_password', oldPass);
    data.append('password', password);
    data.append('confirm_password', cPass);
    console.log(oldPass, password, cPass);
    const endPoint = APIConstant.changePassword;
    return APIManager.CallApi(data, endPoint, 'post');
  },
};
export default ResetPasswordService;
