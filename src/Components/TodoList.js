import React from 'react'
import { useSelector} from 'react-redux';
import Todo from './Todo';
import {useState} from 'react'

const TodoList = () => {
    const initialState = useSelector(state => state.ReducerAdd)
    const [status,setStatus]=useState("ALL")
  return (
    <div>

{status=="ALL"? 
<h2> {initialState.TodoList.map(el =><div> <Todo el={el}/> </div>)}</h2>:
status=="Done"?
initialState.TodoList.filter((el)=>el.isDone == true).map(el=><div> <Todo el={el}/> </div>)
:initialState.TodoList.filter((el)=>!el.isDone).map(el=><div> <Todo el={el}/> </div>)
}

<button style ={{backgroundColor:'white',borderRadius:'5px',margin:'5px',borderColor:'aquamarine'}} onClick={()=>setStatus("ALL")}>All</button>

<button style ={{backgroundColor:'white',borderRadius:'5px',margin:'5px' ,borderColor:'aquamarine'}}  onClick={()=>setStatus("Done")}>Done</button>   

<button style ={{backgroundColor:'white',borderRadius:'5px' ,margin:'5px' ,borderColor:'aquamarine'}}  onClick={()=>setStatus("UnDone")}>Not Done</button>

    </div>
  )
}

export default TodoList