import { combineReducers } from 'redux';
import Cursor from './cursor';
import CommonValue from './commonValue';

const rootReducer = combineReducers({
  Cursor,
  CommonValue,
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
