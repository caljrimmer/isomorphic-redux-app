export const SET_RANDOM = 'SET_RANDOM';
export const INCREMENT_RANDOM = 'INCREMENT_RANDOM';
export const DECREMENT_RANDOM = 'DECREMENT_RANDOM';

export function setRandom(value) {
  return {
    type: SET_RANDOM,
    payload: value
  };
}

export function incrementRandom() {
  return {
    type: INCREMENT_RANDOM
  };
}

export function decrementRandom() {
  return {
    type: DECREMENT_RANDOM
  };
}
