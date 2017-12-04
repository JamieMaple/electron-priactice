import { delay } from 'redux-saga'
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { incrementSuccess, fetchApiSuccess, fetchApiError, INCREMENT, FETCH_API } from './actions'
import { fetchApi } from './api'
// folkable js

function* handleAdd() {
  try {
    yield delay(1000)
    yield put(incrementSuccess())
  } catch(e) {
    throw e
  }
}

function* watchApiCall(action) {
  try {
    const payload = yield call(fetchApi, action.payload.config)
    yield put(fetchApiSuccess(payload))
  } catch(error) {
    yield put(fetchApiError(error))
  }
}

export default function* mySaga() {
  yield takeLatest(FETCH_API, watchApiCall)
  yield takeEvery(INCREMENT, handleAdd)
}
