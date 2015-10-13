import { GET_USER } from '../actions/user';

export default function counter(state = {}, action) {
  switch (action.type) {
  case GET_USER:
    return state;
  default:
    return state;
  }
}