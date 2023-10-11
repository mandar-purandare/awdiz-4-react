import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch (action.type){
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

function UseReducer() {

    const initialState = { count:0 };

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({type:"INCREMENT"});
    }

    const decrement = () => {
        dispatch({type: "DECREMENT"});
    }

    const reset = () => {
        dispatch({type: "RESET"});
    }

  return (
    <div>
        <h2>Count: {state.count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseReducer