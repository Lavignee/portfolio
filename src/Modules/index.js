import { combineReducers } from 'redux';
import Cursor from './cursor';
import CommonValue from './commonValue';

const RootReducer = combineReducers({
  Cursor,
  CommonValue
});

export default RootReducer;