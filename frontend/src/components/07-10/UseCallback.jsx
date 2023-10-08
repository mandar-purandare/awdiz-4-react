import React, {useCallback, useState}from 'react'
import ToDos from './ToDos';

function UseCallback() {

    const [counter, setCounter] = useState(0);
    const [toDo, setToDo] = useState([]);

    //****by changing the state from child compnent ToDos this entire compnent gets rerendered without useCallback****/
    
    // function addToDo(){
    //     setToDo([...toDo,"NewToDo"]);
    // }

    function incCounter(){
        setCounter(count => count+1);
    }

    const addToDo = useCallback(() => {
        setToDo([...toDo,"NewToDo"]);
    }, [toDo])

  return (
    <div>
        <h2>Counter - {counter}</h2>
        <button onClick={incCounter}>+</button>
        <h2>Todo's</h2>
        <ToDos toDo={toDo} setToDo={addToDo}/>
    </div>
  )
}

export default UseCallback