import { SET_RANDOM, INCREMENT_RANDOM, DECREMENT_RANDOM } from '../actions/random';

export default function counter(state = 0, action) {
  switch (action.type) {
  case SET_RANDOM:
    return action.payload,10;
  case INCREMENT_RANDOM:
    return state + (Math.ceil(Math.random() * 5) * 1) + 0.5;
  case DECREMENT_RANDOM:
    return state - (Math.ceil(Math.random() * 5) * 1) - 0.5;
  default:
    return state;
  }
}