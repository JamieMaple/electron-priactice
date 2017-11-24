import * as React from 'react'
import { connect } from 'react-redux'
import { TYPE } from './actions'
import AsyncCounter from './components/AsyncCounter'
import SyncCounter from './components/SyncCounter'

import './reset.css'

function App() {
  return [
    <SyncCounter key="sync" />,
    <AsyncCounter key="async" />,
  ]
}

export default App
