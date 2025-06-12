import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const increase = ()=>{
  if(count>=0){
    setCount(count+1)
  }
}


const decrease = ()=>{
  if(count>0){
    setCount(count-1)
  }
}


const reset = ()=>{
  setCount(0)
}

  return (
    <>
      <h1 style={{color:"red"}}>React Coutner</h1>

     <button onClick={increase}>+</button>
     <h1 >{count}</h1>
     <button onClick={decrease}>-</button> 

     <br/>
     <button
     onClick={reset}
     style={{margin:"20px"}}>Reset</button>
      


    </>
  )
}

export default App
