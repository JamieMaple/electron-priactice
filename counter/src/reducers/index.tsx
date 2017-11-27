import { combineReducers } from 'redux'
import {
  sync_add_one,
  sync_min_one,
  async_add_one,
  async_add_one_begin,
  async_min_one,
  async_min_one_begin,
  add_todo,
  del_todo,
  visibilityType,
  todoType,
} from '../actions'

interface Action {
  type: string,
  [propName: string]: any,
}

export function syncNum(state: number = 0, action: Action): number {
  if (typeof action.num !== 'number') {
    action.num = 1
  }

  switch (action.type) {
    case sync_add_one:
      return state + action.num
    case sync_min_one:
      return state - action.num
    default:
      return state
  }
}

export function asyncNum(state: number = 0, action: Action): any {
  if (typeof action.num !== 'number') {
    action.num = 1
  }

  switch (action.type) {
    case async_add_one:
      return state + action.num
    case async_min_one:
      return state - action.num
    default:
      return state
  }
}

let id = 0
const initTodos = {
  todos: [],
  visibilityFilter: visibilityType.show_all,
}
export function todoList(state: any = initTodos, action: Action) {
  let newState = null
  switch (action.type) {
    case add_todo:
      newState = {
        todos: [
          ...state.todos,
          {
            id: id++,
            message: action.message,
            type: todoType.todo_undo,
          },
        ],
      }
      return {
        ...state,
        ...newState,
      }
    case del_todo:
      newState = {
        todos: state.todos.filter((todo: any) => todo.id !== action.id),
      }
      return {...state, ...newState}
    case todoType[todoType.todo_undo]:
      newState = {
        todos: state.todos.map((todo: any) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              type: todoType.todo_undo,
            }
          } else {
            return todo
          }
        }),
      }
      return {...state, ...newState}
    case todoType[todoType.todo_done]:
      newState = {
        todos: state.todos.map((todo: any) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              type: todoType.todo_done,
            }
          } else {
            return todo
          }
        }),
      }
      return {...state, ...newState}
    default:
      return state
  }
}

export default combineReducers({
  asyncNum,
  syncNum,
  todoList,
})
