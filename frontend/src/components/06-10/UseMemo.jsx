import React, { useMemo, useState } from "react";

function UseMemo(){

    const [toDo, setToDo] = useState([]);

    const [count, setCount] = useState(0);

    function addToDo(){
        setToDo([...toDo,'To Do']);
    }

    const lengthyCalculation = calculate(count);

    // const lengthyCalculation = useMemo(() => calculate(count),[count])

    return(
        <div>
            <h2>Lengthy Calculation - {lengthyCalculation}</h2>
            <h2>Counter</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count => count+1)}>+</button>
            <h2>To Do's</h2>
            <button onClick={addToDo}>Add a To Do</button>
            {toDo.map(li => <div>{li}</div>)}
        </div>
    )
}

function calculate(count){
    for(let i=0; i<=10000; i++){
        console.log('calculating...');
        count += 1;
    }
    return count;
}

export default UseMemo