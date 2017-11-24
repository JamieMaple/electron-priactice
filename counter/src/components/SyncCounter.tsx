import * as React from 'react'
import { connect } from 'react-redux'
import { TYPE } from '../actions'

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

const mapState = (state: any) => {
  return {
    num: state.syncCounter,
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    onAdd: () => {
      dispatch({type: TYPE.add_one})
    },
    onMin: () => {
      dispatch({type: TYPE.min_one})
    },
  }
}

export default connect(mapState, mapDispatch)(CounterContainer)
