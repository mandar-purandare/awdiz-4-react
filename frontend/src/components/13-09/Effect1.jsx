import React, {useEffect, useState} from "react";


const Effect1 = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => alert('First Render, Page Reload or State Change'))

    function incCount(){
        setCounter((prevValue) => prevValue + 1);
    }

    return(
        <div>
            <h1>Effect1 with (all) state dependencies</h1>
            <h2>Counter - {counter}</h2>
            <button onClick={incCount}>Increase count</button>
        </div>
    )
}

export default Effect1;