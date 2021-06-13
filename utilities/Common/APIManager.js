import axios from 'axios';
import DrawerViewModel from '../../viewmodel/Drawer/DrawerViewModel';
import APIConstant from '../Constants/APIConstant';
import {Error_Msg} from '../Constants/StringConstant';

const APIManager = {
  CallApi: async (data, endPoint, methodType, isAddHeader = true) => {
    var config = {
      method: methodType,
      url: APIConstant.baseURl + endPoint,
    };
    if (methodType == 'post') {
      config['data'] = data;
    }
    if (isAddHeader) {
      await DrawerViewModel.GetUserData().then((userData) => {
        if (userData != undefined) {
          if (userData.access_token != undefined) {
            config['headers'] = {access_token: userData.access_token};
          }
        }
      });
    }
    console.log(isAddHeader);
    return axios(config)
      .then((response) => {
        const data = response.data;
        return data;
      })
      .catch((error) => {
        if (error.response != undefined) {
          return error.response.data;
        } else {
          const networkmsg = {
            user_msg: Error_Msg,
            status: 500,
          };
          return networkmsg;
        }
      });
  },
};
export default APIManager;
