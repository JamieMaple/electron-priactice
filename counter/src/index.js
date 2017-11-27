import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { AppContainer } from 'react-hot-loader'
import ReduxThunk from 'redux-thunk'
import App from './app'

let enhancer = null
/* eslint-disable no-undef */
if (process.env.NODE_ENV === 'development') {
  enhancer = window.devToolsExtension ? window.devToolsExtension() : f => f
}

const store = createStore(
  reducer,
  {},
  compose(applyMiddleware(ReduxThunk), enhancer)
)

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App)

/* eslint-disable no-undef */
if (module.hot) {
  // webpack HMR APi
  module.hot.accept('./app', () => {
    render(App)
  })
}
