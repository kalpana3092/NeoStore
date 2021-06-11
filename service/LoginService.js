import APIManager from '../utilities/Common/APIManager';
import APIConstant from '../utilities/Constants/APIConstant';

const LoginService = {
  LoginUser: (email, password) => {
    var data = new FormData();
    data.append('email', email);
    data.append('password', password);
    const endPoint = APIConstant.login;
    return APIManager.CallPostApi(data, endPoint);
  },
};
export default LoginService;
