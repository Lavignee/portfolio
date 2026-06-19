import { combineReducers } from 'redux';
import CommonValue from './commonValue';
import Cursor from './cursor';

const rootReducer = combineReducers({
  Cursor,
  CommonValue,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
