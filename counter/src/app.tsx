import * as React from 'react'
import { connect } from 'react-redux'
import { TYPE } from './actions'
import AsyncCounter from './components/AsyncCounter'
import SyncCounter from './components/SyncCounter'

import './reset.css'

function App() {
  return (
    <div className="app">
      <SyncCounter />
      <AsyncCounter />
    </div>
  )
}

export default App
