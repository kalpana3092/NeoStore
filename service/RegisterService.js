import APIManager from '../utilities/Common/APIManager';
import APIConstant from '../utilities/Constants/APIConstant';

const RegisterService = {
  RegisterUser: (
    fName,
    lName,
    email,
    password,
    cPassword,
    gender,
    phoneNumber,
  ) => {
    var data = new FormData();
    data.append('first_name', fName);
    data.append('last_name', lName);
    data.append('email', email);
    data.append('password', password);
    data.append('confirm_password', cPassword);
    data.append('gender', gender);
    data.append('phone_no', phoneNumber);
    const endPoint = APIConstant.register;
    return APIManager.CallApi(data, endPoint, 'post', false);
  },
};
export default RegisterService;
