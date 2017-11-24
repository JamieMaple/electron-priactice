import { combineReducers } from 'redux'
import { Action, TYPE } from '../actions'

function syncCounter(num: number = 0, action: Action): number {
  let steps: number
  if (typeof action.num !== 'number') {
    steps = 1
  } else {
    steps = action.num
  }

  switch (action.type) {
    case TYPE.add_one:
      return num + steps
    case TYPE.min_one:
      return num - steps
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
