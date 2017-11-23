import { combineReducers } from 'redux'
import { Action, TYPE } from '../actions'

function syncCounter(num: number = 0, action: Action): number {
  if (typeof action.num !== 'number') {
    action.num = 1
  }

  switch (action.type) {
    case TYPE.add_one:
      return num + action.num
    case TYPE.min_one:
      return num - action.num
    default:
      return num
  }
}

function asyncConuter(num: number = 0, action: Action): number {
  switch (action.type) {
    default:
      return num
  }
}

export default combineReducers({syncCounter, asyncConuter})
