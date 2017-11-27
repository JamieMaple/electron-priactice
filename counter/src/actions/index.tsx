interface Action {
  type: string,
  [propName: string]: any,
}

// sync counter

export const sync_add_one = 'SNYC_ADD_ONE'
export function syncAddOne(num: number = 1): Action {
  return {
    num,
    type: sync_add_one,
  }
}

export const sync_min_one = 'SNYC_MIN_ONE'
export function syncMinOne(num: number = 1): Action {
  return {
    num,
    type: sync_min_one,
  }
}

// async counter

export const async_add_one_begin = 'ASNYC_ADD_ONE_BEGIN'
export const async_add_one = 'ASNYC_ADD_ONE'
export function asyncAddOne(num: number): Action {
  return {
    num,
    type: async_add_one,
  }
}

export function asyncAddOneBegin(num: number = 1): any {
  return function(dispatch: any) {
    setTimeout(() => {
      dispatch(asyncAddOne(num))
    }, 500)
  }
}

export const async_min_one_begin = 'ASNYC_MIN_ONE_begin'
export const async_min_one = 'ASNYC_MIN_ONE'
export function asyncMinOne(num: number): Action {
  return {
    num,
    type: async_min_one,
  }
}

export function asyncMinOneBegin(num: number = 1): any {
  return function(dispatch: any) {
    setTimeout(() => {
      dispatch(asyncMinOne(num))
    }, 500)
  }
}

// todo list

export const add_todo = 'ADD_TODO'
export function addTodo(todo: string): Action {
  return {
    message: todo,
    type: add_todo,
  }
}

export const del_todo = 'DELETE_TODO'
export function delTodo(id: number): Action {
  return {
    id,
    type: del_todo,
  }
}

const todo_undo = 'UNDO_ITEM'
const todo_done = 'DONE_ITEM'
export enum todoType {
  todo_undo,
  todo_done,
}
export function toggleTodoStatus(type: string, id: number) {
  return {
    id,
    type,
  }
}

const show_all = 'SHOW_ALL'
const show_done = 'SHOW_DONE'
const show_undo = 'SHOW_UNDO'
export enum visibilityType {
  show_all,
  show_doing,
  show_undo,
}

export function visibilityFilter(type: string): Action {
  return {
    type,
  }
}
