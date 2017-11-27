import * as React from 'react'
import { connect } from 'react-redux'
import AsyncCounter from './components/AsyncCounter'
import SyncCounter from './components/SyncCounter'
import TodoList from './components/Todo'

import './reset.css'

function App() {
  return [
    <SyncCounter key="sync" />,
    <AsyncCounter key="async" />,
    <TodoList key="todo" />,
  ]
}

export default App
