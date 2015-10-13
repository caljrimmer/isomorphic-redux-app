import { combineReducers } from 'redux';
import user from './user';
import counter from './counter';
import random from './random';

const rootReducer = combineReducers({
  user,
  counter,
  random
});

export default rootReducer;