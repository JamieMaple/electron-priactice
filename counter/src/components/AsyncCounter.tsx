import * as React from 'react'

interface CounterInterface {
  onAdd: string,
  onMin: string,
  num: number,
}

function Counter(props: any) {
  return (
    <div>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

function CounterContainer() {
  return (
    <div>
      <h1>AsyncCounter</h1>
      <h2>num:</h2>
      <Counter />
    </div>
  )
}

export default CounterContainer
