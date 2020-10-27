import { combineReducers } from 'redux';
import CursorModule from './CursorModule';
import LanguageModule from './LanguageModule';

const RootReducer = combineReducers({
  CursorModule,
  LanguageModule
});

export default RootReducer;