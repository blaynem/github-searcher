import { combineReducers } from 'redux';
import searchData from './searchDataReducer'

const rootReducer = combineReducers({
  searchData
});

export default rootReducer;