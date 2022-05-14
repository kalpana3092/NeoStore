import LoginActionType from '../actiontype/LoginActionType';

export const getLoginStatus = (isLogin) => {
  return {
    type: LoginActionType.IsLogin,
    loginStatus: isLogin,
  };
};
