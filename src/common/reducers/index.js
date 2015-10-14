import { combineReducers } from 'redux';
import user from './user';
import counter from './counter';
import random from './random';
import layout from './layout';
import version from './version';

const rootReducer = combineReducers({
  user,
  counter,
  layout,
  random,
  version
});

export default rootReducer;