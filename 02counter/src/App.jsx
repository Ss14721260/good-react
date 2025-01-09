import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [Counter, statechangerVariable]  =  useState(0);
  // let Counter = 0; 
  const addValue = () => { 
    statechangerVariable    (Counter+1)
      
    }
    const removeValue = () => { 
      if(Counter>0)
      statechangerVariable(Counter-1)
        
      }


  return (
    <>
      <h1>React with Suraj</h1>
      <h2>Counter value: {Counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value: {Counter}</button>
      <p>{Counter}</p>
       
    </>
  )
}
export default App
