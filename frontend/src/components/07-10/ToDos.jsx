import React,{memo} from 'react'

function ToDos({toDo, setToDo}) {
    alert('Alert from inside ToDos component!')
  return (
    <div>
        <button onClick={setToDo}>Add a new To Do</button>
        {toDo.map((value) => (
            <h2>{value}</h2>
        ))}
    </div>
  )
}

export default memo(ToDos)