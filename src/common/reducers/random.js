import { SET_RANDOM, INCREMENT_RANDOM, DECREMENT_RANDOM } from '../actions/random';

export default function counter(state = 0, action) {
  switch (action.type) {
  case SET_RANDOM:
    return parseInt(action.payload,10);
  case INCREMENT_RANDOM:
    return state + (Math.random() * 1);
  case DECREMENT_RANDOM:
    return state - (Math.random() * 1);
  default:
    return state;
  }
}