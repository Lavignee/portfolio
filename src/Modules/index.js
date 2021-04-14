import { combineReducers } from 'redux';
import CursorModule from './CursorModule';
import CommonValueModule from './CommonValueModule';

const RootReducer = combineReducers({
  CursorModule,
  CommonValueModule
});

export default RootReducer;