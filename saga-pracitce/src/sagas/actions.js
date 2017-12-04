import { createActions } from 'redux-actions'

export const INCREMENT = 'INCREMENT'
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS'
export const FETCH_API = 'FETCH_API'
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS'
export const FETCH_API_ERROR = 'FETCH_API_ERROR'

export const {
  increment,
  incrementSuccess,
  fetchApi,
  fetchApiSuccess,
  fetchApiError,
} = createActions({
  [INCREMENT]: () => {},
  [INCREMENT_SUCCESS]: () => {},
  [FETCH_API]: config => ({config}),
  [FETCH_API_SUCCESS]: data => ({data}),
  [FETCH_API_ERROR]: () => {},
})
