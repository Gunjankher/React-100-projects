import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context/todoContext'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])  
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=> (prevTodo.id === id? todo:prevTodo)))
  }

  const deleteTodo = ()=>{
setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }

  const toggleComplete = ()=>{
setTodos((prev)=>
prev.map((prevTodo)=>
prevTodo.id === id? {...prevTodo,completed:!prevTodo.completed}: prevTodo
)
)
  }

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1 style={{color:"red"}}>Todo List</h1>


    </TodoProvider>
  )
}

export default App
