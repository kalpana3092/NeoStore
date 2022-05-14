import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from '../reducers/LoginReducer';

const rootReducer = combineReducers({
  loginReducer: LoginReducer,
});

const ConfigureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default ConfigureStore;
