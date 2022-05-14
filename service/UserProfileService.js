import APIManager from '../utilities/Common/APIManager';
import APIConstant from '../utilities/Constants/APIConstant';

const UserProfileService = {
  UpdateUserProfile: (fName, lName, email, phoneNumber, dob, profilePic) => {
    var data = new FormData();
    data.append('first_name', fName);
    data.append('last_name', lName);
    data.append('email', email);
    data.append('dob', dob);
    data.append('profile_pic', profilePic);
    data.append('phone_no', phoneNumber);
    const endPoint = APIConstant.updateUser;
    return APIManager.CallApi(data, endPoint, 'post');
  },

  GetUserProfile: () => {
    const endPoint = APIConstant.getUserDetail;
    return APIManager.CallApi(undefined, endPoint, 'get');
  },
};
export default UserProfileService;
