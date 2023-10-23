import React from 'react'
import useCounter from './useCounter';

function CustomHook() {

    const [counter,  setCounter, increment, decrement, reset] = useCounter();

  return (
    <div>
        <h1>Counter (using custom hook) : {counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHook