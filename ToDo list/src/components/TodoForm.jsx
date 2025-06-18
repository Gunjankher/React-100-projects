import React from 'react'
import {useTodo} from '../context/todoContext'

function TodoForm() {

    const [todo,setTodo] = React.useState("")

    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault()

        if(!todo) return 

        addTodo({todo,completed:false})
        setTodo("")
    }

  return (
   <form>

    <input
    type="text"
    onChange={(e)=>setTodo(e.target.value)}
    placeholder='write your todo'
    />

    <button type='submit'>
Add
    </button>


   </form>
  )
}

export default TodoForm