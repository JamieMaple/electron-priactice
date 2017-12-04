import { handleActions } from 'redux-actions'
import { INCREMENT_SUCCESS, FETCH_API_SUCCESS, FETCH_API_ERROR } from './actions'

const initState = {
  counter: 0,
  fetchData: 'unknown'
}

export default handleActions({
  [INCREMENT_SUCCESS]: (state) => {
    return { ...state, counter: state.counter + 1 }
  },
  [FETCH_API_SUCCESS]: (state, action) => {
    return { ...state, fetchData: action.payload.data }
  },
  [FETCH_API_ERROR]: (state, action) => {
    if (action.error) {
      return { ...state, fetchData: 'something error: ' + action.payload.message }
    }
  }
}, initState)
