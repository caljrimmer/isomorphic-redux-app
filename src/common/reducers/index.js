import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import undoable from 'redux-undo';

import user from './user';
import counter from './counter';
import layout from './layout';
import version from './version';
import {selectedReddit,postsByReddit, promisePostsSuccess} from './reddit';

const rootReducer = combineReducers({
  user : user,
  counter : undoable(counter),
  layout : undoable(layout),
  version : version,
  selectedReddit : undoable(selectedReddit),
  postsByReddit : undoable(postsByReddit),
  router : routerStateReducer
});

export default rootReducer;