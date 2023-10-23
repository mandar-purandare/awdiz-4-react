import {useState} from 'react'

function useCounter(initialState = 0) {

    const [counter, setCounter] = useState(initialState);

    function increment(){
        setCounter(count => count + 1);
    }

    function decrement(){
        setCounter(count => count - 1);
    }

    function reset(){
        setCounter(0);
    }

  return [counter, setCounter, increment, decrement, reset];
}

export default useCounter