import * as React from 'react'
import { connect } from 'react-redux'
import { asyncAddOne, asyncMinOne, asyncAddOneBegin, asyncMinOneBegin } from '../actions'

interface CounterInterface {
  onAdd: any,
  onMin: any,
  num?: number,
}

function Counter({onAdd, onMin}: CounterInterface) {
  return (
    <div>
      <button onClick={onAdd}>+</button>
      <button onClick={onMin}>-</button>
    </div>
  )
}

function CounterContainer({onAdd, onMin, num}: CounterInterface) {
  return (
    <div>
      <h1>AsyncCounter</h1>
      <h2>num:{num}</h2>
      <Counter onAdd={onAdd} onMin={onMin} />
    </div>
  )
}

const mapState = (state: any) => {
  return {
    num: state.asyncNum,
  }
}
const mapDispatch = (dispatch: any) => {
  return {
    onAdd: () => {
      dispatch(asyncAddOneBegin())
    },
    onMin: () => {
      dispatch(asyncMinOneBegin())
    },
  }
}

export default connect(mapState, mapDispatch)(CounterContainer)
