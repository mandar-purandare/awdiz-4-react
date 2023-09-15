import React, {useEffect, useState} from "react";

const Effect2 = () => {

    const [count, setCounter] = useState(0);

    useEffect(() => alert('First render or Reload (No dependencies!)'),[])

    function incCount(){
        setCounter(prevValue => prevValue +1);
    }

    return(
        <div>
            <h1>Effect 2 with no dependencies</h1>
            <h2>{count}</h2>
            <button onClick={incCount}>Increase count</button>
        </div>
    )
}

export default Effect2;