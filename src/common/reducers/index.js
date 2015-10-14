import { combineReducers } from 'redux';
import user from './user';
import counter from './counter';
import random from './random';
import layout from './layout';

const rootReducer = combineReducers({
  user,
  counter,
  layout,
  random
});

export default rootReducer;