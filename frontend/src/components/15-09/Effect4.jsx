import React, {useState,useEffect} from "react";

function Effect4(){

    const [count1, setCounter1] = useState(0);

    const [count2, setCounter2] = useState(0);

    useEffect(() => alert('I appear on render, reload and with change in counter 1 and counter 2 😎'),[count1, count2])

    function incCount1(){
        setCounter1(prevValue => prevValue +1);
    }

    function incCount2(){
        setCounter2(prevValue => prevValue +1);
    }

    return(
        <div>
            <h1>Effect 4 with TWO dependencies</h1>
            <h2>Counter 1</h2>
            <h2>{count1}</h2>
            <button onClick={incCount1}>Increase count</button>
            <h2>Counter 2</h2>
            <h2>{count2}</h2>
            <button onClick={incCount2}>Increase count</button>
        </div>
    )
}

export default Effect4;