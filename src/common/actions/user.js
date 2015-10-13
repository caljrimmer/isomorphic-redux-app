export const GET_USER = 'GET_USER';

export function getUser(value) {
  return {
    type: GET_USER,
    payload: value
  };
}
