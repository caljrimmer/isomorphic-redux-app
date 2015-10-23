
import { ActionCreators } from 'redux-undo';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export function toggleSidebar(value) {
  return {
    type: TOGGLE_SIDEBAR,
    value : value
  };
}

export function undo() {
  return (dispatch, getState) => {
    dispatch(ActionCreators.undo());
  };
}

export function redo() {
  return (dispatch, getState) => {
    dispatch(ActionCreators.redo());
  };
}

/**
* Bundle User into layout
*/

import { GET_USER, getUser} from './user';
export { getUser as getUser };
export { GET_USER as GET_USER };

