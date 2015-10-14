import { TOGGLE_SIDEBAR } from '../actions/layout';

export default function layout(state = {sidebarOpen: false}, action) {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    return {
    	sidebarOpen : action.value	
    };
  default:
    return state;
  }
}