import axios from 'axios';
import APIConstant from '../Constants/APIConstant';
import {Error_Msg} from '../Constants/StringConstant';

const APIManager = {
  CallPostApi: async (data, endPoint) => {
    const config = {
      method: 'post',
      url: APIConstant.baseURl + endPoint,
      data: data,
    };
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
