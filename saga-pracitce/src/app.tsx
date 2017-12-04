import * as React from 'react'
import { connect } from 'react-redux'
import { fetchApi, increment } from './sagas/actions'

const styles = require('./app.css')
const logo = require('./asserts/logo.svg')
const maple = require('./asserts/maple.png')

function Header() {
  return (
    <div className="header">
      <img height="80" src={logo} alt="logo" />
      <h1 className="title">Welcome to Maple's webpack cli</h1>
    </div>
  )
}

function Message() {
  return (
    <div className="message-wrapper"><p>To get started, edit src/App.js and save to hot reload.</p></div>
  )
}

function Maple() {
  return (
    <div className="maple">
      <img height="300" src={maple} alt="" />
    </div>
  )
}

function Counter({count, add, data, getData}: any) {
  return (
    <div>
      <span>{count}</span>
      <br/>
      <button onClick={add}>+</button>
      <p>{data}</p>
      <button onClick={getData.bind(null, {
        method: 'GET',
        params: {
          keywords: '乃木坂',
        },
        url: 'http://music.jamiemaple.com/search',
      })}>getData</button>
    </div>
  )
}

const mapState = (state: any) => {
  return {
    count: state.counter,
    data: state.fetchData,
  }
}
const mapDispatch = (dispath: any) => {
  return {
    add() {
      dispath(increment())
    },
    getData(config) {
      dispath(fetchApi(config))
    },
  }
}

const CounterContainer = connect(mapState, mapDispatch)(Counter)

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
        <Message />
        <Maple />
        <CounterContainer />
      </div>
    )
  }
}

export default App
