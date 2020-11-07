import { combineReducers } from 'redux';
import CursorModule from './CursorModule';
import LanguageModule from './LanguageModule';
import ScrollValueModule from './ScrollValueModule';

const RootReducer = combineReducers({
  CursorModule,
  LanguageModule,
  ScrollValueModule
});

export default RootReducer;