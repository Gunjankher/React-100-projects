import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')

const addName = (e)=>{
setName(e.target.value)
}

  return (
    <>
     <h1 style={{color:"red"}}>Name Tag</h1>
     <input
      type="text"
      style={{padding:"10px",backgroundColor:"white", color:"black"}}
      onChange={addName}
      />

      <h3 style={{gap:"10px"}}>Hello {name}!</h3>
    </>

    

  )
}

export default App
