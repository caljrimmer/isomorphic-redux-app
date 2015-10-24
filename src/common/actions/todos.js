export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}

export function editTodo(id, text) {
  return { type: EDIT_TODO, id, text };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}

export function completeAll() {
  return { type: COMPLETE_ALL };
}

export function clearCompleted() {
  return { type: CLEAR_COMPLETED };
}