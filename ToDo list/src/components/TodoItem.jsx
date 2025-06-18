import React, { useState } from 'react'


function TodoItem({todo}) {

   	  const [isTodoEditable, setIsTodoEditable] = useState(false)
	  const [todoMsg, setTodoMsg] = useState(todo.todo)
	  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

      const editTodo = ()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
      }

      const toggleCompleted = ()=>{
        toggleComplete(todo.id)
      }

  return (
    <div>
      <input
       type="checkbox" 
       checked = {todo.completed}
       onChange={toggleCompleted}
       />

       <input
       type="text"
       value={todoMsg}
       onChange={(e)=>setTodoMsg(e.target.value)}
       readOnly = {!isTodoEditable}
       />

       {/* Edit Save btn */}

       <button
       onClick={()=>{
        if(todo.completed) return

        if(isTodoEditable){
            editTodo()
        }else{
            setIsTodoEditable((prev)=>!prev)
        }

       }}
       >
        {isTodoEditable ? "📁" : "✏️"}
       </button>

       {/* Delete button */}

       <button
       onClick={()=>deleteTodo(todo.id)}
       >
        ❌
       </button>

    </div>
  )
}

export default TodoItem