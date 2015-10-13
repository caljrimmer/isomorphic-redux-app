import { GET_USER } from '../actions/user';

export default function counter(state = {}, action) {
  switch (action.type) {
  case GET_USER:
    return {
      name : 'John Smith',
      dept : 'Web Team',
      lastLogin : new Date(),
      email : 'john@smith.com',
      id : action.payload 
    };
  default:
    return state;
  }
}