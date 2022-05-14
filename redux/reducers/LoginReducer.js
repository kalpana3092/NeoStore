import LoginActionType from '../actiontype/LoginActionType';

const initialState = {
  isLogin: undefined,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionType.IsLogin:
      return {
        ...state,
        isLogin: action.loginStatus,
      };
    default:
      return {
        ...state,
      };
  }
};
export default LoginReducer;
