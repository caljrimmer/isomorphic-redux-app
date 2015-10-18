import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import user from './user';
import counter from './counter';
import layout from './layout';
import version from './version';
import {selectedReddit,postsByReddit, promisePostsSuccess} from './reddit';

const rootReducer = combineReducers({
  user,
  counter,
  layout,
  version,
  selectedReddit,
  postsByReddit,
  router : routerStateReducer
});

export default rootReducer;