import * as React from 'react'
import { connect } from 'react-redux'
import { syncAddOne, syncMinOne } from '../actions'

interface CounterInterface {
  onAdd: any,
  onMin: any,
  num?: number,
}

function SyncCounter(props: CounterInterface) {
  return (
    <div>
      <button onClick={props.onAdd}>+</button>
      <button onClick={props.onMin}>-</button>
    </div>
  )
}

function CounterContainer(props: CounterInterface) {
  const { onAdd, onMin, num } = props

  return (
    <div className="app">
      <div key='main'>
        <h1>SyncCounter</h1>
        <h2>num: {num}</h2>
      </div>
      <SyncCounter key='sync' onAdd={onAdd} onMin={onMin} />
    </div>
  )
}

const mapState = (state: any, own: any) => {
  return {
    num: state.syncNum,
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    onAdd: () => {
      dispatch(syncAddOne())
    },
    onMin: () => {
      dispatch(syncMinOne())
    },
  }
}

export default connect(mapState, mapDispatch)(CounterContainer)
