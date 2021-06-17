import UserProfileService from '../../service/UserProfileService';
import LocalStorageManager from '../../utilities/Common/LocalStorageManager';
import {LocalStorageKeys} from '../../utilities/Constants/StringConstant';

const UserProfileViewModel = {
  UpdateUserProfile: async (
    fName,
    lName,
    email,
    phoneNumber,
    dob,
    profilePic,
  ) => {
    const result = UserProfileService.UpdateUserProfile(
      fName,
      lName,
      email,
      phoneNumber,
      dob,
      profilePic,
    ).then((responseData) => {
      if (responseData.status === 200) {
        console.log('insideviewmodel', responseData);
        LocalStorageManager.SaveData(
          LocalStorageKeys.kUserData,
          responseData.data,
        );
      }
      return responseData.user_msg;
    });
    return result;
  },

  GetUserDetails: async () => {
    const result = UserProfileService.GetUserProfile().then((responseData) => {
      if (responseData.status === 200) {
        LocalStorageManager.SaveData(
          LocalStorageKeys.kUserData,
          responseData.data.user_data,
        );
        return responseData.data.user_data;
      } else {
        return responseData;
      }
    });
    return result;
  },
};
export default UserProfileViewModel;
