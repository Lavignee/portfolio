import { combineReducers } from 'redux';
import CursorModule from './CursorModule';
import LanguageModule from './LanguageModule';
import ScrollValueModule from './ScrollValueModule';
import CommonValueModule from './CommonValueModule';

const RootReducer = combineReducers({
  CursorModule,
  LanguageModule,
  ScrollValueModule,
  CommonValueModule
});

export default RootReducer;