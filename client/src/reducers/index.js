import {combineReducers} from 'redux'
import authReducer from './authReducer';
import searchReducers from './searchReducer';

export default combineReducers({
  auth: authReducer,
  search: searchReducers
});